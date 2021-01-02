require 'open-uri'
start = Time.now
site = 'https://www.google.com/'
readSite = URI(site).read
p readSite.length
p Time.now - start
