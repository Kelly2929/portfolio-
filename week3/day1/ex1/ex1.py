class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
       
cat1= Cat('ruby',5)
cat2= Cat('max',2)
cat3= Cat('nina',8)
    

def find_oldest_cat(cats):
        oldest_cat=max(cats,key=lambda cat:cat.age)
        return oldest_cat
    
cats=[cat1, cat2, cat3]

oldest=find_oldest_cat(cats)

          
print(f'the oldest cat is {oldest.name},and is {oldest.age} years old.')

#EXERCICE 2

class dog:
     def _init_ (self ,name ,height):
          self.name=name
          self.height=height
        
     def bark(self):
               print(f'{self.name}goes woof')

     def jump(self):
                jump_height=self.height*2
                print(f'{self.name},{jump_height}cm height')

davids_dog=dog("Rex", 50)
print(f"davids _dog is{davids_dog.name} and he jump {davids_dog.height}")

davids_dog.bark()
davids_dog.jump()

sarahs_dog=dog("teacup",20)
print (f"sarahs_dog is {sarahs_dog.name},and she jump{sarahs_dog.height}")

sarahs_dog.bark()
sarahs_dog.jump()
                     
if davids_dog.height>sarahs_dog.height:
                     print(f"the bigger dog is:{davids_dog.name}")
else:
                     print(f"the biger dog is:{sarahs_dog.name}")
     
#exercice 4

class zoo:
    
      def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name
def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
def get_animals(self):
        for animal in self.animals:
            print(animal)
def sell_animal(self, animal_sold):
    if animal_sold in self.animals:
        self.animals.remove(animal_sold)
def sort_animal