#-------------------------------------------------------#
# Imports
#-------------------------------------------------------#
from unicodedata import name
from flask import Flask, render_template

#-------------------------------------------------------#
# Application Configuration
#-------------------------------------------------------#
app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('pages/index.html', name=name)
