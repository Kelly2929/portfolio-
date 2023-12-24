#ex 16
c="france"

c=sorted(c)
c="".join(c)
print(c)

#ex17
L1=[9,8,7,14,3,2,"a","p","bonjour","b"]
L2=["b,1,,9"]
#ex19
ch= "bonjour tous le monde"
ch_inverse=ch[::-1]
print(ch_inverse)

#ex20
d={"pomme":3,"banane":7,"kiwi":1}

print(d["pomme"])
print (d["banane"])

#ex 23
monNom="julien"
age=32
langage="Python"
ch=f"Je m'appelle {monNom} et j ai {age} ans.J apprend le langage {langage}".format(monNom,age,langage)
print(ch)
#ex29
import random
L=[3,6,8,7,2,"S," "ch","d"]
random.shuffle(L)
print (L)
#EX26
L=[1,2,3,4,5]
L.remove(1)
print(L)