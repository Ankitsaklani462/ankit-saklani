class Mobile:
    def __init__(self,brand,ram,processor,storage):
        self.brand=brand
        self.ram=ram    
        self.processor=processor
        self.storage=storage

    def __str__(self):
     return f"Brand:{self.brand}|Ram:{self.ram}|Processor:{self.processor}|Stroage:{self.storage}"
        
mi = Mobile("MI","8GB","Octacore","512GB")
print(mi)
print(mi.brand)

 
