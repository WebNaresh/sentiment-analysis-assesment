React App for Review Sentiment Analysis

### Task 1: Setup and Display Reviews

1. Create a new React application on the codepen.io
2. Create a component named `ReviewList` to fetch and display reviews from the provided
   JSON file.
3. The reviews data is present in a file named ‘reviewsData.json’. You can download the file
   from the given link

### Task 2: Highlight Sentences and Apply Colors

1. Implement a component called `ReviewHighlighter` to display reviews and highlight
   sentences based on sentiment.
2. Use the `analytics` property in each review to determine sentences and their corresponding
   sentiments.
3. Apply colors to sentences based on sentiment (e.g., color code for each sentiment is given in
   the resource section).

### Task 3: Tooltip with Sentiment Topics

1. Create a `Tooltip` component that appears on hovering over highlighted sentences.
2. Extract the sentiment topic from the analytics data and display it in the tooltip.

### Task 4: Design and Styling

1. Design the UI based on the provided screenshots, ensuring a clean and user-friendly
   interface.
2. Apply CSS styles to the components for proper formatting and alignment.
3. Use the provided highlight colours for each sentiment.

### Task 5: Optional - Use Highlight Indices

1. If the candidate wants an additional challenge, implement the optional `highlight_indices`
   property to highlight sentences using specific start and end indices.

### Description of properties in the review object

Example:
{
"reviewer_name": "Barbara",
"content": "We had a relaxing time ❤.\n\n[Positive]: The spa was excellent. We had a wonderful
relaxing time! [Negative]: The food choices at the Rowe restaurant. Parking should be included in your
stay because you pay a lot to stay here already.",
"raw_content": "We had a relaxing time ❤.\n\n[Positive]: The spa was excellent. We had a wonderful
relaxing time! [Negative]: The food choices at the Rowe restaurant. Parking should be included in your
stay because you pay a lot to stay here already.",
"date": "05 Dec 2023",
"rating_review_score": 10.0,
"out_of": 10.0,
"source_language": "en",
"source": {
"name": "booking.com",
"icon": "https://reviewmagic.innspire.com:8001/media/sources/booking3.png",
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
"highlight_indices":
[ [155, 237, "Negative"]
]
}
],
}
Description:
● reviewer_name: Name of the reviewer.
● content: The main text content of the review.
● raw_content: Unmodified original content of the review.
● date: Date when the review was posted.
● rating_review_score: Numeric rating given by the reviewer.
● out_of: Maximum rating possible (e.g., 10.0).
● source: Information about the source of the review.
○ name: Name of the source (eg: booking.com).
○ icon: Icon of the source.
● source_language: Language in which the review is written.
● analytics: Array containing sentiment analytics for specific categories.
○ category: Category associated with the analytics.
○ topic: Topic associated with analytics.
○ phrases: Phrases related to analytics.
○ sentences: Extracted sentences related to the analytics.
○ sentiment: Sentiment of the analytics.
○ highlight_indices:Array containing start and end indices for highlighted
sentences.

### Submission Guidelines:

1. The candidate should create a codepen for the react app.
2. Login with your email id and then share us the link of the project in a pdf with a brief
   explanation of what you successfully implemented/created in this project (also mention
   any libraries, packages or framework if you use any)
3. The pdf must be named as FullName_MobileNumber.

### Evaluation Criteria:

1. Functionality: Ensure the React app displays reviews, highlights sentences, and shows
   tooltips as described.
2. Code Quality: Assess the clarity, organization, and readability of the React components.
3. UI/UX: Evaluate the design and user interface for responsiveness and adherence to the
   provided screenshots.
4. Sentiment Analysis: Verify that sentences are correctly highlighted based on sentiment, and
   tooltips display the correct topics.
5. Optional Feature (if implemented): Assess the use of the optional `highlight_indices`
   property.
   This assignment is designed to assess the candidate's ability to integrate data from a file,
   implement dynamic UI features, and handle state management in a React application.

### Resources

Color code for each sentiment:
● Positive: #D9F2DD
● Negative: #F2DBD9
● Mixed: #e8bd6d3d
● Neutral: #eaf09b6b
Single review design and styling:
Tooltip design on hovering over a sentence
Using the given reviews data as a json object, create a single page react app that
lists the reviews (design can be referenced from the images attached), and
highlight the sentences in the reviews text with appropriate colours relating to it's
sentiment using the analytics data present in each review object. On hovering
over the highlighted sentence, a tooltip should appear displaying the topic of that
sentiment/sentence (refer to the screenshots attached).

1. The review text is represented by the "content" property in each review object.
2. The analytics property in each review is an array of objects, each object
   contains four properties that you should use namely Topic, Sentiment,
   Sentences and Highlight Indices.
3. The "Topic" property should be displayed in the tooltip.
4. The "Sentiment" property (can be positive, negative, mixed or neutral) is
   depicted by the highlight color (we have provided the colors to use for
   each sentiment).
5. The "Sentences" property is an array of sentences present in the review text.
   All sentences talk about that "Topic". Each sentence should be highlighted in the
   paragraph with the color assigned to that "Sentiment".
6. Optionally, use the "Highlight Indices" (an array of object) property to highlight
   the sentences present in each range. Each object in the array contains three
   values, start index, end index and sentiment (it's the same in each object and
   is equal to the global "Sentiment" property) respectively. The start and end
   indices are the starting and ending position of a sentence in the review text
