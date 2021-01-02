import time
start = time.time()
import urllib.request
site = 'https://www.google.com/'
readSite  = urllib.request.urlopen(site)
strLen = len(readSite.read())
print(strLen)
print(time.time() - start)
