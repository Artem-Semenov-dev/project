def updateLinks():
    # TODO: write your code here
    links = document.getElementsByTagName("a")
    for link in links:
        if (link.getAttribute("href")=="") or (link.getAttribute("href")=="#"):
            link.setAttribute("role", "button")
    

updateLinks()