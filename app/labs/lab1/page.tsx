export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        Text documents are often broken up into serveral sections and subsections. 
        Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes.
        For instance this paragraph is preceded by the heading Heading Tags.
        The font of the section headings are usually larger and bolder than their subsection headings.
        This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc.
        HTML heading tags can be used to format plain text so that it renders in a browser has large headings.
        There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6.
        Tag h1 is the largest heading and tag h6 is the smallest.
      </div>
      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1">
            This is a paragraph. We often separate a long set of sentences with vertical spaces to make the text easier to read.
            Browsers ignore vertical white spaces and render all the text as one single set of sentences.
            To force the browser to add vertical spacing, wrap the paragraphs you want to separate with the paragraph tag
        </p>
        <p id="wd-p-2">
            This is the first paragraph. The paragraph tag is used to format vertical haps between long pieces of text like this one.
        </p>
        <p id="wd-p-3">
            This is the second paragraph.
            Even though there is a deliberate whihte gap between the paragraph above and this paragraph, by default browsers render them as one contiguous piece of text as shown here on the right.
        </p>
        <p id="wd-p-4">
            This is the third paragraph.
            Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.
        </p>
      </div>
      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        How to make pancakes:
        <ol id="wd-pancakes">
            <li>Mix dry ingredients.</li>
            <li>Add wet ingredients.</li>
            <li>Stir to combine.</li>
            <li>Heat a skillet or griddle.</li>
            <li>Pour batter onto the skillet.</li>
            <li>Cook until bubbly on top.</li>
            <li>Flip and cook the other side.</li>
            <li>Serve and enjoy!</li>
        </ol>
        My favorite recipe: crepes
        <ol id="wd-your-favorite-recipe">
            <li>Whisk eggs, milk, water, and salt together in a large mixing bowl.</li>
            <li>Add flour and melted butter; whisk until batter is smooth.</li>
            <li>Heat a lightly oiled griddle or frying pan over medium-high heat.</li>
            <li>Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each crepe.</li>
            <li>Tilt the pan with a circular motion so that the batter coats the surface evenly.</li>
            <li>Cook the crepe for about 2 minutes, until the bottom is light brown.</li>
            <li>Loosen with a spatula, turn and cook the other side.</li>
            <li>Serve hot with your favorite fillings and toppings.</li>
        </ol>
        <h5>Unordered List Tag</h5>
        My favorite books (in no particular order)
        <ul id="wd-my-books">
            <li>Dune</li>
            <li>Lord of the Rings</li>
            <li>Ender's Game</li>
            <li>Red Mars</li>
            <li>The Forever War</li>
        </ul>
        Your favorite books (in no particular order)
        <ul id="wd-your-books">
            <li>Everything I Know About Love</li>
            <li>Eve's Hollywood</li>
            <li>Writers and Lovers</li>
            <li>Anxious People</li>
            <li>Daisy Jones and the Six</li>
        </ul>
      </div>
      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr>
                <td>Q3</td>
                <td>JavaScript</td>
                <td>2/17/21</td>
                <td>95</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet: <br />
        <img id="wd-starship" width="400px"   src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" />
        <br />
        Loading a local image:
        <br />
        <img id="wd-teslabot" src="/images/teslabot.jpg" height="200px" />
        </div>
        <div id="wd-forms">
            <h4>Form Elements</h4>
            <form id="wd-text-fields">
                <h5>Text Fields</h5>
                <label htmlFor="wd-text-fields-username">Username:</label>
                <input placeholder="jdoe" id="wd-text-fields-username" /> <br />
                <label htmlFor="wd-text-fields-password">Password:</label>
                <input type="password" defaultValue="123@#$asd"
                    id="wd-text-fields-password" /><br />
                <label htmlFor="wd-text-fields-first-name">First name:</label>
                <input type="text" title="John" id="wd-text-fields-first-name" /> <br />
                <label htmlFor="wd-text-fields-last-name">Last name:</label>
                <input type="text" placeholder="Doe"
                    defaultValue="Wonderland"
                    title="The last name"
                    id="wd-text-fields-last-name" />
                {/* copy rest of form elements here  */}
            </form>
        </div>
    </div>
  );
}