class Message {
    static __count = 0;

    constructor(message, author) {
        this._number = ++Message.__count;
        this._message = message;
        this._author = author;
    }

    get number() {
        return this._number;
    }

    set number(number) {
        this._number = number;
    }

    get message() {
        return this._message;
    }

    set message(message) {
        this._message = message;
    }
    
    get author() {
        return this._author;
    }

    set author(author) {
        this._author = author;
    }
}

const messages = [
    new Message("You must be the change you wish to see in the world.", "Mahatma Gandhi"),
    new Message("Spread love everywhere you go. Let no one ever come to you without leaving happier.", "Mother Teresa"),
    new Message("The only thing we have to fear is fear itself.", "Franklin D. Roosevelt"),
    new Message("Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate: only love can do that.", "Martin Luther King Jr."),
    new Message("Do one thing every day that scares you.", "Eleanor Roosevelt"),
    new Message("Well done is better than well said.", "Benjamin Franklin"),
    new Message("The best and most beautiful things in the world cannot be seen or even touched, they must be felt with the heart.", "Helen Keller"),
    new Message("It is during our darkest moments that we must focus to see the light.", "Aristotle"),
    new Message("Do not go where the path may lead; go instead where there is no path and leave a trail.", "Ralph Waldo Emerson"),
    new Message("Be yourself; everyone else is already taken.", "Oscar Wilde"),
    new Message("If life were predictable, it would cease to be life and be without flavor.", "Eleanor Roosevelt"),
    new Message("In the end, it's not the years in your life that count. It's the life in your years.", "Abraham Lincoln"),
    new Message("Life is a succession of lessons which must be lived to be understood.", "Ralph Waldo Emerson"),
    new Message("You will face many defeats in life, but never let yourself be defeated.", "Maya Angelou"),
    new Message("Never let the fear of striking out keep you from playing the game.", "Babe Ruth"),
    new Message("Life is never fair, and perhaps it is a good thing for most of us that it is not.", "Oscar Wilde"),
    new Message("The only impossible journey is the one you never begin.", "Tony Robbins"),
    new Message("In this life, we cannot do great things. We can only do small things with great love.", "Mother Teresa"),
    new Message("Only a life lived for others is a life worthwhile.", "Albert Einstein"),
    new Message("The purpose of our lives is to be happy.", "Dalai Lama"),
    new Message("You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.", "John Lennon"),
    new Message("You only live once, but if you do it right, once is enough.", "Mae West"),
    new Message("To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "Ralph Waldo Emerson"),
    new Message("Don't worry when you are not recognized but strive to be worthy of recognition.", "Abraham Lincoln"),
    new Message("The greatest glory in living lies not in never falling, but in rising every time we fall.", "Nelson Mandela"),
    new Message("Life is really simple, but we insist on making it complicated.", "Confucius"),
    new Message("May you live all the days of your life.", "Jonathan Swift"),
    new Message("Life itself is the most wonderful fairy tale.", "Hans Christian Andersen"),
    new Message("Do not let making a living prevent you from making a life.", "John Wooden"),
    new Message("Go confidently in the direction of your dreams! Live the life you've imagined.", "Henry David Thoreau"),
    new Message("Keep smiling, because life is a beautiful thing and there's so much to smile about.", "Marilyn Monroe"),
    new Message("In the depth of winter, I finally learned that within me there lay an invincible summer.", "Albert Camus"),
    new Message("In three words, I can sum up everything I've learned about life: it goes on.", "Robert Frost"),
    new Message("So we beat on, boats against the current, borne back ceaselessly into the past.", "F. Scott Fitzgerald"),
    new Message("Life is either a daring adventure or nothing.", "Helen Keller"),
    new Message("You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", "Dr. Seuss"),
    new Message("Life is made of ever so many partings welded together.", "Charles Dickens"),
    new Message("Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.", "Steve Jobs"),
    new Message("Life is trying things to see if they work.", "Ray Bradbury"),
    new Message("Many of life's failures are people who did not realize how close they were to success when they gave up.", "Thomas A. Edison"),
    new Message("The secret of success is to do the common thing uncommonly well.", "John D. Rockefeller Jr."),
    new Message("I find that the harder I work, the more luck I seem to have.", "Thomas Jefferson"),
    new Message("Success is not final; failure is not fatal: It is the courage to continue that count.", "Winston S. Churchill"),
    new Message("The way to get started is to quit talking and begin doing.", "Walt Disney"),
    new Message("Don't be distracted by criticism. Remember — the only taste of success some people get is to take a bite out of you.", "Zig Ziglar"),
    new Message("Success usually comes to those who are too busy to be looking for it.", "Henry David Thoreau"),
    new Message("Everything you can imagine is real.", "Pablo Picasso"),
    new Message("If you want to make your dreams come true, the first thing you have to do is wake up.", "J.M. Power"),
    new Message("There are no secrets to success. It is the result of preparation, hard work, and learning from failure.", "Colin Powell"),
    new Message("The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.", "Barack Obama"),
    new Message("The only limit to our realization of tomorrow will be our doubts of today.", "Franklin D. Roosevelt"),
    new Message("It is better to fail in originality than to succeed in imitation.", "Herman Melville"),
    new Message("The future belongs to those who believe in the beauty of their dreams.", "Eleanor Roosevelt"),
    new Message("The road to success and the road to failure are almost exactly the same.", "Colin R. Davis"),
    new Message("Always remember, your focus determines your reality.", "George Lucas"),
    new Message("If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", "James Cameron"),
    new Message("If you really look closely, most overnight successes took a long time.", "Steve Jobs"),
    new Message("To be successful, you have to be selfish, or else you will never achieve. And once you get to your highest level, then you have to be unselfish.", "Michael Jordan"),
    new Message("Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine.", "Nikola Tesla"),
    new Message("Try not to become a man of success. Rather become a man of value.", "Albert Einstein"),
    new Message("Don't be afraid to give up the good to go for the great.", "John D. Rockefeller"),
    new Message("Leave nothing for tomorrow which can be done today.", "Abraham Lincoln"),
    new Message("Success is walking from failure to failure with no loss of enthusiasm.", "Winston Churchill"),
    new Message("When you undervalue what you do, the world will undervalue who you are.", "Oprah Winfrey"),
    new Message("If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work.", "Thomas J. Watson"),
    new Message("If you genuinely want something, don't wait for it — teach yourself to be impatient.", "Gurbaksh Chahal"),
    new Message("The only place where success comes before work is in the dictionary.", "Vidal Sassoon"),
    new Message("If you are not willing to risk the usual, you will have to settle for the ordinary.", "Jim Rohn"),
    new Message("Before anything else, preparation is the key to success.", "Alexander Graham Bell"),
    new Message("In playing ball and in life, a person occasionally gets the opportunity to do something great. When that time comes, only two things matter: being prepared to seize the moment and having the courage to take your best swing.", "Hank Aaron"),
    new Message("Believe you can, and you're halfway there.", "Theodore Roosevelt"),
    new Message("The only person you are destined to become is the person you decide to be.", "Ralph Waldo Emerson"),
    new Message("I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "Maya Angelou"),
    new Message("The question isn't who is going to let me; it's who is going to stop me.", "Ayn Rand"),
    new Message("Winning isn't everything, but wanting to win is.", "Vince Lombardi"),
    new Message("Whether you think you can or you think you can't, you're right.", "Henry Ford"),
    new Message("You miss 100% of the shots you don't take.", "Wayne Gretzky"),
    new Message("I alone cannot change the world, but I can cast a stone across the water to create many ripples.", "Mother Teresa"),
    new Message("You become what you believe.", "Oprah Winfrey"),
    new Message("The most difficult thing is the decision to act; the rest is merely tenacity.", "Amelia Earhart"),
    new Message("How wonderful it is that nobody need wait a single moment before starting to improve the world.", "Anne Frank"),
    new Message("An unexamined life is not worth living.", "Socrates"),
    new Message("Everything you've ever wanted is on the other side of fear.", "George Addair"),
    new Message("Dream big and dare to fail.", "Norman Vaughan"),
    new Message("Courage is grace under pressure.", "Ernest Hemingway"),
    new Message("It is still best to be honest and truthful; to make the most of what we have; to be happy with simple pleasures; and have courage when things go wrong.", "Laura Ingalls Wilder"),
    new Message("Nothing is impossible, the word itself says, 'I'm possible!'", "Audrey Hepburn"),
    new Message("It does not matter how slowly you go as long as you do not stop.", "Confucius"),
    new Message("Don't find fault, find a remedy: anyone can complain.", "Henry Ford"),
    new Message("A man may die, nations may rise and fall, but an idea lives on.", "John F. Kennedy"),
    new Message("I have learned over the years that when one's mind is made up, this diminishes fear.", "Rosa Parks"),
    new Message("I didn't fail the test. I just found 100 ways to do it wrong.", "Benjamin Franklin"),
    new Message("If you're offered a seat on a rocket ship, don't ask what seat! Just get on.", "Sheryl Sandberg"),
    new Message("With great power comes great responsibility.", "Stan Lee"),
    new Message("I would rather die of passion than of boredom.", "Vincent van Gogh"),
    new Message("If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", "Oprah Winfrey"),
    new Message("Dreaming, after all, is a form of planning.", "Gloria Steinem"),
    new Message("Whatever the mind of man can conceive and believe, it can achieve.", "Napoleon Hill"),
    new Message("First, have a definite, clear, practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends: wisdom, money, materials, and methods. Third, adjust all your means to that end.", "Aristotle"),
    new Message("Twenty years from now, you will be more disappointed by the things that you didn't do than by the ones you did do. So, throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.", "Mark Twain"),
    new Message("The biggest risk is not taking any risk… In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks.", "Mark Zuckerberg"),
    new Message("Doing the best at this moment puts you in the best place for the next moment.", "Oprah Winfrey"),
    new Message("You don't learn to walk by following rules. You learn by doing and by falling over.", "Richard Branson"),
    new Message("It's fine to celebrate success, but it is more important to heed the lessons of failure.", "Bill Gates"),
    new Message("High expectations are the key to everything.", "Sam Walton"),
    new Message("Don't you dare underestimate the power of your own instinct.", "Barbara Corcoran"),
    new Message("Luck is a dividend of sweat. The more you sweat, the luckier you get.", "Ray Kroc"),
    new Message("The difference between successful people and unsuccessful people is that successful people do all the things unsuccessful people don't want to do.", "John Paul DeJoria"),
    new Message("Don't be afraid to give up the good to go for the great.", "John D. Rockefeller"),
    new Message("The price of inaction is far greater than the cost of a mistake.", "Meg Whitman"),
    new Message("Don't watch the clock; do what it does. Keep going.", "Sam Levenson"),
    new Message("Time is money.", "Benjamin Franklin"),
    new Message("Time waits for no one.", "Unknown Author"),
    new Message("There is never enough time to do everything, but there is always enough time to do the most important thing.", "Brian Tracy"),
    new Message("All great achievements require time.", "Maya Angelou"),
    new Message("You may delay, but time will not.", "Benjamin Franklin"),
    new Message("Time is more valuable than money. You can get more money, but you cannot get more time.", "Jim Rohn"),
    new Message("The trouble is, you think you have time.", "Jack Kornfield"),
    new Message("Either you run the day or the day runs you.", "Jim Rohn"),
    new Message("Never leave till tomorrow that which you can do today.", "Benjamin Franklin"),
    new Message("Lack of direction, not lack of time, is the problem. We all have twenty-four-hour days.", "Zig Ziglar"),
    new Message("A goal is a dream with a deadline.", "Napoleon Hill")
];

export { Message };
export default messages;