#!/usr/bin/python
import pandas as pd
import os
import shutil
import string as string

df = pd.read_csv('./Data_Entry_2017.csv')

# Runs through excel sheet
for index, row in df.iterrows():
    for x in range(13):
        imageDirectory =  './images_0' if x > 9 else './images_00'
        imageDirectory = imageDirectory + str(x)+'/images/'
        file_name = row['Image Index']
        category = row['Finding Labels']
        if os.path.exists(imageDirectory + file_name):
            # Create a new folder for the category if it doesn't already exist
            category = category.replace("|", " and ")
            if not os.path.exists('./Diseases/'+category):
                os.makedirs('./Diseases/'+category)
        # Move the file to the category folder
            os.rename(imageDirectory + file_name,  './Diseases/'+category+'/'+ file_name)


print("All files have been moved to their respective category folders.")
