class Mobile:
    def __init__(self,brand,ram,processor,storage):
        self.__brand=brand
        self.__ram=ram    
        self.__processor=processor
        self.__storage=storage
    def set_brand(self,brand):
       self.__brand=brand
    def get_brand(self):
       return self.__brand

    def __str__(self):
     return f"Brand:{self.__brand}|Ram:{self.__ram}|Processor:{self.__processor}|Stroage:{self.__storage}"
        
mi = Mobile("MI","8GB","Octacore","512GB")
mi.set_brand("MI Brand")
print(mi.get_brand())
 
