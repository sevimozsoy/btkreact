# Bazı Ufak Ama Önemli Notlar

Btk Akademinin React kursunu takip ederek oluşturduğum bu proje, React Hook kullanıyor. Normal şartlarda kursta eski sürüm React kullanıldığı için class componentları mevcut.

Kendim dökümantasyondan bakarak, class olan tarafları Hooks ile düzenliyorum.

## Json Server ile ilgili

useEffect Hook'u fetch ile getirildiğinde verilerin gelmesi bir süre gecikiyor. Bu nedenle map fonksiyonu tanımlı bir array bulamadığından hata veriyor. Bu engellemek için, map edilen bilginin State'ini kullanılan component'a gelmiş mi diye bakmamız gerekiyor.

```
useEffect(() =>{
        fetch("http://localhost:3000/categories")
        .then(res => {
            return res.json()})
        .then(data => {
            console.log(data)
            setCategories(data)})
      },[]);
    
    const changeCategory = (category) => {
        setcategoryNameDisplay(category.categoryName)
    }

    return (
            <div>
                
                <h2>
                    {props.info.title}
                </h2>

                {categories && <ListGroup>
                    {
                        categories.map(category => (<ListGroupItem onClick={() => changeCategory(category)} key={category.id}>{category.categoryName}</ListGroupItem>))
                    }
                </ListGroup>}
            
                    <h4>
                        {categoryNameDisplay}
                    </h4>

            </div>
        )

```
