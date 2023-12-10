#Exercice1


my_fav_numbers = {5, 9, 41, 9}


my_fav_numbers.add(15)
my_fav_numbers.add(23)


my_fav_numbers.remove(23)

friend_fav_numbers = {10, 22, 35, 47}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print("Our Favorite Numbers:", our_fav_numbers)


#exercice2

#Tuples are immutable, it means once they are created, their contents can t be changed, added to, or removed. thats is the difference betwwen tulpes and list .
#if you want to add something new you need to create a new Tulpes who combine the old Tulpes and the new Tulpes

#exercice3

basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")

basket.remove("Blueberries")

basket.append("Kiwi")

basket.insert(0, "Apples")

apple_count = basket.count("Apples")

print("Number of Apples in the basket:", apple_count)

basket.clear()

print("Basket after emptying:", basket)



#Exercices5

while True:
    name=input("Please enter your name : ")
    if name=="Lior":
        print("Name Matched")
        break
    print("Try again ")



#exercices7

