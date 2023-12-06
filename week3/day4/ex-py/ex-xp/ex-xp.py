def get_words_from_file(filename):
    with open(filename),'r' as file :
        read= words = file.read().split()
    return  words

import random



def get_random_sentence(length, words_list):
    return ''.join(random.choice(words_list) for _ in range(length))

    return sentence.lower()

def main():
    print("Welcome to the Random Sentence Generator!")

    print("This program creates a random sentence based on random words.)
          
          if __name__ == "__main__"
    main() 

    
    
sentence_length = int(input("Enter the length of the sentence (between 2 and 20): "))

if 2 <= sentence_length <= 20:

else:
            print("Error: The number must be between 2 and 20.")
            return 
            except ValueError
        
             print("Error: Please enter a valid integer.")

             
name__ == "__main__":
    main

    #exercice 2 :
    
    
import json


sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800


            data=json.loads(simplejson)



salary = data["company"]["employee"]["payable"]["salary"]
print("Salary:", salary)

data["company"]["employee"]["birth_date"] = "1991-29-05"

with open("updated_data.json", "w") as json_file:
    json.dump(data, json_file, indent=4)

    

print("Updated JSON saved to 'updated_data.json'")


          
