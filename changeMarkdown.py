# coding=utf-8
from lxml import etree
import requests
import os
import sys
import re

from sys import version_info
if version_info.major == 2: # and version_info.minor != 7:
	reload(sys)
	sys.setdefaultencoding('utf-8')

def getSrc():
	headers = {'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36'}
	siteUrl = '''http://192.168.1.173/mediawiki/index.php/Seminars'''
	html = requests.get(siteUrl,headers = headers)
	webSource = html.text
	with open('source.html','w') as f:
		f.write(webSource)

getSrc()
with open('source.html','r') as f:
	webSource = f.read()

aim = "Network Verification: When Clarke Meets Cerf"
def getLinks(aimString):
	loc = webSource.find(aimString)
	trStart = webSource[:loc].rfind("<tr>")
	trEnd = webSource[loc:].find("</tr>")
	trContent = webSource[trStart:loc+trEnd+5]
	# print(trContent)
	pdfLinks = re.compile('<a href="[^"]*"[^<]*</a>').findall(trContent)
	return pdfLinks

def findfile(start, name):
    # print('Try to find '+name)
    for relpath, dirs, files in os.walk(start):
        if name in files:
            # full_path = os.path.join(start, relpath, name)
            # print(os.path.normpath(os.path.abspath(full_path)))
            return os.path.join(relpath,name)
    print("Error!Find No file "+name)

# indexMd = './Tsinghua-NSLab.github.io/index.md'
indexMd = './index.md'
indFile = open(indexMd,'r').readlines()

def getOneRecord(recordStr):
	originalRecord = recordStr.split('|')
	newRecord = list(originalRecord)
	# print(newRecord)
	fileName = originalRecord[3].strip()
	# print(fileName)
	links = getLinks(fileName)
	# print(links)
	for link in links:
		if 'page does not' in link:
			continue
		else:
			if fileName in link:
				file = link.split('"')[1].split('/')[-1]
				# print(file)
				FilePath = findfile('./',(link.split('"'))[1].split('/')[-1])
				newRecord[3] = '['+newRecord[3]+']('+FilePath+")"
			elif 'slide' in link:
				FilePath = findfile('./',(link.split('"'))[1].split('/')[-1])
				newRecord[5] = '['+newRecord[5]+']('+FilePath+")"
			elif 'review' in link:
				FilePath = findfile('./',(link.split('"'))[1].split('/')[-1]+'.txt')
				newRecord[6] = '['+newRecord[6]+']('+FilePath+")"
			else:
				print('error!')
				print(link)
				print(fileName)
	res = ""
	for elem in newRecord:
		res = res + elem + "|"
	res = res.replace('||','|')
	print(res)
	return res

for no in range(230,284):
	getOneRecord(indFile[no].strip('\n'))

