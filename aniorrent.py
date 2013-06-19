import re
import urllib.request as req
from bs4 import BeautifulSoup

class Link_data():
	def __init__(self,ty=None,su=None,na=None,pa=None,do=None,si=None,se=None,le=None,dn=None,me=None):
		self.type = ty
		self.subber = su
		self.name = na
		self.pageurl = pa
		self.dlurl = do
		self.size = si
		self.seeders = se
		self.leechers = le
		self.downloads = dn
		self.messages = me

def load_html():
	f = open('NyaaTorrents .htm','r',encoding='utf-8')
	data = f.read()
	f.close()
	#print("data: "),print(data),print('file')
	return data
	
def load_html_web():
	webpage = req.urlopen("http://www.nyaa.eu")
	data = webpage.read()
	webpage.close
	#print("data: "),print(data),print('web')
	return data

def create_list(soup):
        tl = []
        for info in soup.findAll('tr',{'class':'tlistrow'}):
                #get out the stuff
                tl.append(extract_data(info))
        return tl

def extract_data(info):
        type = info.find('a')['title']
        title = info.find('td',{'class':'tlistname'}).string
        subber, name = extract_subber(title)
        pageurl = info.find('td',{'class':'tlistname'}).find('a')['href']
        dlurl = info.find('td',{'class':'tlistdownload'}).find('a')['href']
        size = info.find('td',{'class':'tlistsize'}).string

        if info.find('td',{'class':'tlistfailed'}) == None:
                seeders = info.find('td',{'class':'tlistsn'}).string
                leechers = info.find('td',{'class':'tlistln'}).string
        else:
                seeders = info.find('td',{'class':'tlistfailed'}).string
                leechers = info.find('td',{'class':'tlistfailed'}).string
                
        downloads = info.find('td',{'class':'tlistdn'}).string
        messages = info.find('td',{'class':'tlistmn'}).string

##        print(type)
##        print(title)
##        print(subber)
##        print(name)
##        print(pageurl)
##        print(dlurl)
##        print(size)
##        print(seeders)
##        print(leechers)
##        print(downloads)
##        print(messages)
##        print()
        link_dat = Link_data(type,subber,name,pageurl,dlurl,size,seeders,leechers,downloads,messages)

        return link_dat

def extract_subber(title):
        subber = ''
        name = ''
        #non greed
        sub = re.findall(r'\[(.*?)\]', title)
        if sub:
                subber = sub[0]
                name = re.findall(r'\](.*)', title)
        if name:
            name = name[0]
        else:
                name = title
        return subber,name



print("hello")
soup = BeautifulSoup(load_html_web())
#print(soup.prettify())

torrent_list = create_list(soup)

#print(torrent_list[1].name)


for thing in torrent_list:
        
        print(thing.subber)
        
        print(thing.name)
        print('--------------------------------------')


