def updateLinks(links):
    # TODO: write your code here
    links[0].setAttribute("role", "button")
    href = links[0].getAttribute("href")
    console.log(href)
    

links = document.getElementsByTagName("a")
console.log("Number of links: " + links.length)

updateLinks(links)