#exercice 1
print ("hello world\n"*4,end="")
#exercice 2
result=(99**3)*8
print(result)
#exercice 3
print(5 < 3 )#False

print(3 == 3 )#True
print(3 == "3") #false

#exercice 4
compter_brand="intel"
print(f"i have a intel computer")
#exercice 5
name="kelly"
age=32
shoe_size=37
info= f"my name {name},im {age} years old and my shoe size is {shoe_size}."
print (info)
#exercice 6
a=12
b=6
if a>b:
     print ("Hello World")
     #exercice 7
     number=int(input("enter a number:"))
     if number %2 ==0:
      print(f"The number{number}is even.")
else:
     print(f" The number{number}is odd.")

     #exercice 8
     user_name=input("what is your name?")
     my_name="kelly"
     if user_name.lower()== my_name.lower():
      print("we have the same name")
     else:
       print (f"nice to meet you{user_name}")
           
