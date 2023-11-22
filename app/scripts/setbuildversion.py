#!/usr/bin/env python

#####
#
# Purpose: Set build numbers for UI in package.json
#
# Author: Simon Prickett - updated for json by Eric Brennan
#
#####

import codecs
import os
import sys
import getopt
import json
from xml.dom import minidom

def setBuildNumber(version, packageFile):

  with open(packageFile, "r") as jsonFile:
    data = json.load(jsonFile)

  data["version"] = version;

  with open(packageFile, "w") as jsonFile:
    json.dump(data, jsonFile)

#####
# Entry point, run the script...
#####
if (len(sys.argv) == 3):
 if (os.path.isfile(sys.argv[2])):
  setBuildNumber(sys.argv[1], sys.argv[2])
  print(sys.argv[2] + ' updated successfully')
 else:
  print('*****ERROR: ' + sys.argv[2] + ' file does not exist')
else:
 print('*****ERROR: Expecting 2 parameters: version package.json')
 sys.exit(1)
