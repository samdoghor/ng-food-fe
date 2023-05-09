# imports
from flask import Flask, jsonify, render_template

# configurations
app = Flask(__name__)

# application


@app.route('/')
def home():
    return render_template('pages/index.html')
