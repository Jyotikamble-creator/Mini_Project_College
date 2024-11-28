```py 
from sklearn.model_selection import train_test_split
X_train,X_test,Y_train,Y_test = train_test_split(data,labels,test_size=0.2,random_state=42
```

- we use sklearn to do this job as 80% will be for learning and 20% of the data will be for testing 
- by this we can check the correctness of our model as we already know testing result

