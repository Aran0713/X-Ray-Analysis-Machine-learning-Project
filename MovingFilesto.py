import pandas as pd
import os
import shutil

df = pd.read_csv('./Data_Entry_2017.csv')

# Runs through excel sheet
for index, row in df.iterrows():
    file_name = row['Image Index']
    category = row['Finding Labels']
    
    if os.path.exists('C:/Users/Aran A/Desktop/Hackathon/images_012/images/' + file_name):
    
        # Create a new folder for the category if it doesn't already exist
        if not os.path.exists('C:/Users/Aran A/Desktop/Hackathon/Diseases/'+category):
            os.makedirs('C:/Users/Aran A/Desktop/Hackathon/Diseases/'+category)
    
    # Move the file to the category folder
        os.rename('C:/Users/Aran A/Desktop/Hackathon/images_012/images/' + file_name,  'C:/Users/Aran A/Desktop/Hackathon/Diseases/'+category+'/'+ file_name)


print("All files have been moved to their respective category folders.")
