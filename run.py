#!/usr/bin/env python
from asyncio import subprocess
from importlib.resources import path
from os import link
import webbrowser
import subprocess
subprocess.run(["npm start"])
link = "localhost:3000/Personal-Portfolio-Reactjs/"
path = "C:/Program Files/Mozilla Firefox/firefox.exe"
webbrowser.register('firefox', None, webbrowser.BackgroundBrowser(path))
webbrowser.get('firefox').open_new(link)
print("Server Running")