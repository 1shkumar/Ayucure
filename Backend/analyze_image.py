import cv2
import sys
import numpy as np

def analyze_image(image_path):
    # Load the image
    image = cv2.imread(image_path)
    
    # Example analysis: Check if the image is grayscale or color
    if len(image.shape) == 2:
        print("grayscale")
    elif len(image.shape) == 3:
        print("color")
    
    # Placeholder for calorie estimation
    # In a real application, you would use a more sophisticated method or dataset
    calories = 200  # Example calorie count

    return calories

if __name__ == "__main__":
    image_path = sys.argv[1]
    calories = analyze_image(image_path)
    print(calories)
