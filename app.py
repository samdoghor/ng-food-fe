#-------------------------------------------------------#
# Imports
#-------------------------------------------------------#
from flask import Flask, render_template

#-------------------------------------------------------#
# Application Configuration
#-------------------------------------------------------#
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('pages/index.html')

@app.route('/learn')
def homes():
    return render_template('pages/learn.html')

#-------------------------------------------------------#
# Error Handler
#-------------------------------------------------------#
@app.errorhandler(404)
def PageNotFound(error):
    return render_template('errors/404.html'), 404

