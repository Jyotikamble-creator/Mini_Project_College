# Melspectogram Visualization

>  Frequency : the number of waves that pass a fixed point in unit time

- we are using

```py
spectrogram = librosa.feature.melspectrogram(y=y,sr=sr)
```
- to convert audio into 2d representation where
    - x-axis: time
    - y-axis: Frequency
    - colors/values : represents the intensity of sound at different frequencies
- we use

```py
spectrogram_db = librosa.power_to_db(spectrogram,ref=np.max)
```
- power_to_db converts these values to a logarithmic scale (decibels), which compresses the range and makes it easier to analyze and visualize.

---




