# Convolutional neural network (CNN)

- anything to do with images CNN is used generally for classification of images
- what cnn does is 
    - first it will combins the nearby pixels 
    - and create a new image with these combined pixels
    - this cnn has a filter with `k x k` square 
    - we keep this filter into some pixels of the image we will get a value
    - that value we will put in our next iterational image
    - we start this `k x k` with some random weights but our neural network will learn and choose a correct weights
    - we have these multiple cnn units 
    - some units might start recognizing the curves, the straight lines etc.

- CNN performs
    1) Convolutions
    2) Pooling

1) Convolution 
    - convolution layer uses filter that performs the convolution operation and outputs a seperate matrix with the collected features
    - size of image is reduced and we will only get the imporatnt aspects of the images
2) Pooling
    - it is a downsampling operation typically applied after convolution layer
    two types 
        1) max pooling 
        2) avg pooling
3) Fully connected 
    - the resultant matrix are passed as input to all the neural network 
    - this neural network will learn from this and generates the required classification output
