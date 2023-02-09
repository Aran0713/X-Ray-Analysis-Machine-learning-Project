import cv2
import tensorflow as tf
import os

DataDir = '..\..\..\..\Hackathon\Diseases'
Categories = [f for f in os.listdir(DataDir) if os.path.isdir(os.path.join(DataDir, f))]

def prepare(filepath):
    IMG_SIZE = 250
    img_array = cv2.imread(filepath, cv2.IMREAD_GRAYSCALE)
    img_array = cv2.resize(img_array, (IMG_SIZE, IMG_SIZE))
    img_array = img_array.reshape(-1, IMG_SIZE, IMG_SIZE, 1)
    return img_array

model = tf.keras.models.load_model("../flaskTest/X-Ray-Analysis.h5")

prediction = model.predict([prepare('../flaskTest/uploads/00001836_006.png')])
print(prediction[0][0])
print(Categories[int(prediction[0][0])])

