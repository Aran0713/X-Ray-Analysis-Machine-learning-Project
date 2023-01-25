# from flask import Flask

import os
from flask import Flask, flash, request, redirect, url_for
from werkzeug.utils import secure_filename

from flask_cors import CORS

UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# def diagnosisDestructuring(diagnosis):


@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

            #insert image processing function here.

            #test diagnosis
            diagnosis = "Atelectasis and Cardiomegaly and Consolidation and Edema and Effusion and Infiltration and Mass and Nodule"
            diagnosis = diagnosis.split(" and ")
            # print(diagnosis);

            return {
                "Diagnosis" : diagnosis,
                "Description" : ["Cancer Bad"],
                # "diagonsis" : "description"
            }
            # return redirect(url_for('download_file', name=filename))
    return {
        "Diagnosis" : ["No Diagnosis"],
        "Description": ["No Diagnosis, no death"],
    }