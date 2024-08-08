React App for Review Sentiment Analysis

### Task 1: Setup and Display Reviews

1. Create a new React application on the codepen.io
2. Create a component named `ReviewList` to fetch and display reviews from the provided
   JSON file.
3. The reviews data is present in a file named ‘reviewsData.json’. You can download the file
   from the given link
![image](https://github.com/user-attachments/assets/45562375-aebc-47b2-930d-c5847487b077)
![image](https://github.com/user-attachments/assets/61e6e86c-0fa2-4f44-b827-6ed44a68eca1)



### Task 2: Highlight Sentences and Apply Colors

1. Implement a component called `ReviewHighlighter` to display reviews and highlight
   sentences based on sentiment.
2. Use the `analytics` property in each review to determine sentences and their corresponding
   sentiments.
3. Apply colors to sentences based on sentiment (e.g., color code for each sentiment is given in
   the resource section).
![image](https://github.com/user-attachments/assets/f74b269d-c0c9-4478-addd-50573cd63a5e)
![image](https://github.com/user-attachments/assets/f93aa0ac-e246-494c-b10f-5eb3f32181f1)



### Task 3: Tooltip with Sentiment Topics

1. Create a `Tooltip` component that appears on hovering over highlighted sentences.
2. Extract the sentiment topic from the analytics data and display it in the tooltip.
![image](https://github.com/user-attachments/assets/bf74c209-8b18-4bce-8538-ad50ffddb396)

   ![image](https://github.com/user-attachments/assets/1c90b66d-8f17-4629-b6df-bda7d77be3c0)


### Task 4: Design and Styling

1. Design the UI based on the provided screenshots, ensuring a clean and user-friendly
   interface.
2. Apply CSS styles to the components for proper formatting and alignment.
3. Use the provided highlight colours for each sentiment.
![image](https://github.com/user-attachments/assets/b1d0cdd1-3f3c-4383-a361-218dac48551a)
![image](https://github.com/user-attachments/assets/f95b79b4-b4fc-4c13-8170-25cab45e98ac)



### Task 5: Optional - Use Highlight Indices

1. If the candidate wants an additional challenge, implement the optional `highlight_indices`
   property to highlight sentences using specific start and end indices.
   ![image](https://github.com/user-attachments/assets/52a391dc-d632-4e6a-ae8a-d1f09c47e3fa)

![image](https://github.com/user-attachments/assets/9730cdf6-272f-4908-b804-1937ca4c001f)


### Description of properties in the review object

Example:
```json
{
  "reviewer_name": "Barbara",
  "content": "We had a relaxing time ❤.\n\n[Positive]: The spa was excellent. We had a wonderful relaxing time! [Negative]: The food choices at the Rowe restaurant. Parking should be included in your stay because you pay a lot to stay here already.",
  "raw_content": "We had a relaxing time ❤.\n\n[Positive]: The spa was excellent. We had a wonderful relaxing time! [Negative]: The food choices at the Rowe restaurant. Parking should be included in your stay because you pay a lot to stay here already.",
  "date": "05 Dec 2023",
  "rating_review_score": 10.0,
  "out_of": 10.0,
  "source_language": "en",
  "source": {
    "name": "booking.com",
    "icon": "https://reviewmagic.innspire.com:8001/media/sources/booking3.png"
  },
  "analytics": [
    {
      "category": "spa",
      "topic": "spa",
      "phrases": ["spa", "spa"],
      "sentences": ["The spa was excellent"],
      "sentiment": "Positive",
      "highlight_indices": [
        [40, 61, "Positive"]
      ]
    },
    {
      "category": "facilities",
      "topic": "facilities",
      "phrases": ["parking", "parking"],
      "sentences": ["Parking should be included in your stay because you pay a lot to stay here already"],
      "sentiment": "Negative",
      "highlight_indices": [
        [155, 237, "Negative"]
      ]
    }
  ]
}
```

