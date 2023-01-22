import numpy as np
import matplotlib.pyplot as plt 
import os
import cv2
import random
import pickle

DataDir = 'C:/Users/Aran A/Desktop/Hackathon/X-Ray Analysis/Diseases'
Categories = [f for f in os.listdir(DataDir) if os.path.isdir(os.path.join(DataDir, f))]
#print(Categories)

training_data = []
IMG_SIZE = 250

def create_training_data():
    for category in Categories:
        path = os.path.join(DataDir, category)
        class_num = Categories.index(category)

        for img in os.listdir(path):
            try:
                img_array = cv2.imread(os.path.join(path, img), cv2.IMREAD_GRAYSCALE)
                img_array = cv2.resize(img_array, (IMG_SIZE, IMG_SIZE))
                training_data.append([img_array, class_num])
            except Exception as e:
                pass
            
create_training_data()

print(len(training_data))

random.shuffle(training_data)

for sample in training_data[:10]:
    print(sample[1])

X = []
Y = []

for features, label in training_data:
    X.append(features)
    Y.append(label)
    
X = np.array(X).reshape(-1, IMG_SIZE, IMG_SIZE, 1)

pickle_out = open("X.pickle", "wb")
pickle.dump(X, pickle_out)
pickle_out.close()

pickle_out = open("Y.pickle", "wb")
pickle.dump(Y, pickle_out)
pickle_out.close()




            
