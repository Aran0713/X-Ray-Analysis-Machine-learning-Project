# from flask import Flask

import os
from flask import Flask, flash, request, redirect, url_for
from werkzeug.utils import secure_filename
import cv2
import tensorflow as tf
# import os

from flask_cors import CORS


DataDir = '/mnt/sdb/services/hackfit2023/Diseases'
#need to implement*** Throw error if can't open directory
Categories = [f for f in os.listdir(DataDir) if os.path.isdir(os.path.join(DataDir, f))]



UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

#function that applys filter to user submitted photo -> ML
def prepare(filepath):
    IMG_SIZE = 250
    img_array = cv2.imread(filepath, cv2.IMREAD_GRAYSCALE)
    img_array = cv2.resize(img_array, (IMG_SIZE, IMG_SIZE))
    img_array = img_array.reshape(-1, IMG_SIZE, IMG_SIZE, 1)
    return img_array

#function that checks if file is legal type -> backend
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
            directoryAndFile = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(directoryAndFile)
            model = tf.keras.models.load_model("X-Ray-Analysis.h5")
            # print(model)
            prediction = model.predict([prepare(directoryAndFile)])
            # print(prediction)
            diagnosis = Categories[int(prediction[0][0])]
            print(diagnosis)
            #insert image processing function here.

            #test diagnosis
            # diagnosis = "Atelectasis and Cardiomegaly and Consolidation and Edema and Effusion and Infiltration and Mass and Nodule"
            diagnosis = diagnosis.split(" and ")
            # print(diagnosis);

            return {
                "Diagnosis" : diagnosis,
                # "Description" : ["Cancer Bad"],
                # "diagonsis" : "description"
            }
            # return redirect(url_for('download_file', name=filename))
    return {
        "Diagnosis" : ["No Diagnosis yet"],
        # "Description": ["No Diagnosis, no death"],
    }