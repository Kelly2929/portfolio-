class curency:
def__init__(self,label,amount):
self.label=label

def_str_(self):
return f{self amount} {self label}

def_int__(self):
return int{self. amount}

def_repr_(self):
return f'' repr{self. amount} {self label}''
        

def __add_(self,other):

if self.label==other.label
return self.amount+other.amount

elif type(other)==int:

return int(self.amount)+other

else:
return
'impossible to add diferent labels'


