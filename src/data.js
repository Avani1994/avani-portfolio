export const data = {
  name: 'Avani Sharma',
  jobTitle: 'Machine Learning Engineer',
  shortIntro: `Greetings, fellow humans and robots alike! I'm Avani Sharma, a Machine Learning Engineer with a Masters degree from the University of Utah who's always on the hunt for the next big breakthrough. But when I'm not busy teaching machines to think, you can find me exploring the world!`,
  email: 'avaninith@gmail.com',
  phone: '+1 (385)-216-2582',
  avatar: 'avani.jpg',
  socials: [
    {
      site: 'github',
      profile: 'https://github.com/Avani1994',
    },
    {
      site: 'linkedin',
      profile: 'https://www.linkedin.com/in/sharmaavani/',
    },
    {
      site: 'medium',
      profile: 'https://avaninith.medium.com/',
    },
    {
      site: 'instagram',
      profile: 'https://www.instagram.com/avanisharma23/',
    },
  ],
  about: {
    title: 'About Me',
    subtitle: 'Why am I the right person for the job?',
    description: `As a <b>Machine Learning Engineer</b>, I'm passionate about using data to solve complex problems and make informed decisions. I specialize in <b>Natural Language Processing (NLP)</b>, which allows me to analyze and understand human language in a way that's both fascinating and incredibly useful. Whether it's building chatbots or developing algorithms that can predict consumer behavior, I'm always looking for new ways to apply my skills and push the boundaries of what's possible. 🤖

One of my greatest strengths is my ability to think creatively and outside the box. I'm not content with simply following established methods - I'm always looking for new approaches and innovative solutions. This mindset has led me to develop some truly groundbreaking projects, such as a machine learning model that can predict the stock market very accurately 💡 <i>(shhh!)</i>. 
    
Another quality that sets me apart is my attention to detail. When it comes to data analysis, every little bit counts - and I'm meticulous in my approach to collecting, cleaning, and interpreting data. 🔍
    
Overall, I'm driven by a deep curiosity and a desire to make a positive impact on the world. Whether it's through developing new technologies or simply sharing my knowledge with others, I'm committed to using my skills to make a difference. 🚀`,
  },
  skills: {
    techs: [
      {
        category: 'Machine Learning',
        decorator: 'ml.png',
        progress: {
          'Natural Language Processing': 9,
          'Reinforcement learning': 7,
          'Behind the scene maths': 9,
        },
      },
      {
        category: 'Frameworks',
        decorator: 'web-dev.png',
        progress: {
          MLFlow: 8,
          Keras: 9,
        },
      },
      {
        category: 'Web Development',
        decorator: 'web-dev.png',
        progress: {
          React: 8,
          'HTML/CSS': 9,
        },
      },
      {
        category: 'Languages',
        decorator: '',
        progress: {
          Python: 10,
          Javascript: 9,
          'C++': 8,
          React: 9,
          R: 8,
          SQL: 6,
        },
      },
    ],
    libraries: [
      'NumPy',
      'Pandas',
      'Spacy',
      'Scikit-Learn',
      'MLflow',
      'Pytorch',
      'Huggingface',
      'NLTK',
      'Matplotlib',
      'Seaborn',
      'OpenCV',
      'PIL',
      'Beautifulsoup',
      'Textblob',
      'TAlib',
    ],
    title: 'My humble underrated progress',
    subtitle: 'My Skills',
  },
  projects: {
    title: 'My Projects',
    subtitle: 'Welcome to my workshop',
    projects: [
      {
        title: 'Stock Investment',
        description:
          'Researched and built an Reinforcement Learning agent based on OHLCV environment to guide on the amount that should be invested each day based on how market is doing. The agent was trained using Q-learning algorithm and achieved a cumulative return of 25% over a period of 6 months.',
        date: '2023',
        tags: ['Python', 'Reinforcement Learning'],
        code: '',
        url: '',
        hero: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
      },
      {
        title: 'Fitnets Replication',
        description:
          'Implemented Fitnets in PyTorch for knowledge distillation after reading research papers. The model was trained on CIFAR-10 dataset and achieved a test accuracy of 90%. In FitNets, the student model is trained to mimic the intermediate representations of the teacher model, rather than its final output.',
        date: '2023',
        tags: ['PyTorch', 'Python'],
        code: '',
        url: '',
        hero: 'fitnets.jpg',
      },
      {
        title: 'Ubuntu Support Chats',
        description:
          'Researched state of art techniques for response selection (semantic search) in ChatBot development. Now working on training a deep learning model in PyTorch which will find most similar response from historical chats for a given user query. Dataset: Ubuntu Dialogue Corpus. The model will be evaluated using Recall@k metric.',
        date: '2023',
        tags: ['NLP', 'PyTorch', 'Python'],
        code: '',
        url: 'https://www.kaggle.com/datasets/rtatman/ubuntu-dialogue-corpus',
        hero: 'https://images.unsplash.com/photo-1629654291663-b91ad427698f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3474&q=80',
      },
      {
        title: 'Chat Intent Recognition',
        description:
          'Researched state of art techniques for ChatBot development. Trained an intent classification language model by fine tuning BERT model on banking dataset in PyTorch. The model achieved an accuracy of 95% on the test set. Integrated the trained model with a ChatBot framework to enable natural language processing and improve user experience.',
        date: '2022',
        tags: ['NLP', 'PyTorch', 'ML'],
        code: '',
        url: '',
        hero: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
      },
      {
        title: 'Multilabel classification',
        description:
          'Finetuned BERT Base Model for toxic comment classification on Toxic Comment Dataset using PyTorch Lightning. Achieved an F1 score of 0.87. To reduce training time, we used mixed precision training, that uses half-precision numbers for the forward and backward passes of the model, while using full-precision numbers for the weight updates',
        date: '2022',
        tags: ['BERT', 'Classification', 'ML'],
        code: '',
        url: 'https://www.kaggle.com/competitions/jigsaw-toxic-comment-classification-challenge/',
        hero: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80',
      },
      {
        title: 'AI in Drone',
        description:
          'Developed a drone installed with voice and facial recognition to follow the specific person and listen to voice commands. Used OpenCV and TensorFlow for object detection and tracking. The drone was tested in outdoor environments and achieved an accuracy of 90%.',
        date: '2020',
        tags: ['Artificial Intelligence', 'Image recognition'],
        code: 'https://github.com/Avani1994/followMeTello',
        url: '',
        hero: 'https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3538&q=80',
      },
      {
        title: 'University Webpages Clustering and Visualization',
        description:
          'Employed tf-idf with clustering techniques such as k-means, Agglomerative via Sklearn to group University Webpages and outperformed bag of words, taking accuracy from 25% to 75%. Visualized the clusters using t-SNE and achieved a silhouette score of 0.7.',
        date: '2017',
        tags: ['Clustering', 'Machine Learning'],
        code: 'https://github.com/Avani1994/DM_Clustering_Vizualization_Webpages',
        url: '',
        hero: 'clustering.png',
      },
      {
        title:
          'Splitting Convolution Networks and training them on Multiple GPUs',
        description:
          'Reduced training time by 50% to 74% using no communication/ hybrid communication scheme within tolerable accuracy drop of 2% to 12%. Implemented using PyTorch and Horovod. The model was trained on ImageNet dataset and achieved a top-1 accuracy of 75%.',
        date: '2017',
        tags: ['Neural Networks', 'CNN'],
        code: '',
        url: '',
        hero: 'https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3456&q=80',
      },
      {
        title: 'Author Attribution using Multi Class classification (ML)',
        description:
          "Leveraged Scikit Learn's SVM 1-vs-1 and 1-vs-rest classifiers in Python over Amazon Commerce Reviews Dataset, with accuracy of 97% and 96% respectively. Visualized precision and recall using matplotlib. The dataset was preprocessed using TF-IDF vectorization.",
        date: '2016',
        tags: ['Classification', 'Python'],
        code: '',
        url: '',
        hero: 'https://images.unsplash.com/photo-1522648695590-c76b02bfa717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3542&q=80',
      },
      {
        title: 'Coreference Resolution(NLP)',
        description:
          'Implemented modules such as exact/partial/pronoun matching, semantic class match, appositives match using NLTK, wordnet and later clustering in python to achieve 61% accuracy among top 5 in the class of 120 students. Used CoNLL-2012 Shared Task dataset. The results were evaluated using MUC, B^3, CEAF-e metrics.',
        date: '2016',
        tags: ['NLTK', 'Clustering'],
        code: 'https://github.com/Avani1994/Coreference_Resolution_NLP',
        url: '',
        hero: 'coreference.png',
      },
      {
        title: 'Page Recommendation System',
        description:
          'Implemented hybrid system using content based filtering and collaborative filtering to recommend web pages based on user preferences. Used MovieLens dataset. By combining these two approaches, we aimed to provide more accurate and diverse recommendations to users. The system was evaluated using precision@k and recall@k metrics.',
        date: '2016',
        tags: ['Recommendation System'],
        code: '',
        url: '',
        hero: 'recommendation.png',
      },
    ],
  },
  work: {
    title: 'My Experience',
    subtitle: 'Places and positions I have learnt so much at!',
    workExperience: [
      {
        company: 'Bloomberg LP',
        position: 'Software Engineer (ML + Backend)',
        statue: 'Full-time',
        startDate: 'Feb 2021',
        endDate: 'Present',
        skills: ['Scikit-Learn', 'Machine Learning', 'C++', 'Python'],
        description: [
          'Contributed majorly to Bond Pricing and Spread Analytics Team.',
          'Coding in Python, C++ Developed ML Models to predict Spread of Bonds using Market Data and Price making pricing 80% faster.',
          'Experimented with several ML models including perceptron, random forests, linear regression, with regularization, deep neural nets and evaluated results using RMS loss. Linear Regression using polynomial coefficients performed best with RMS error less then 10bps. Models were trained separately for each of the 25+ ETFs. (Pytorch, Numpy, Pandas, Scikit Learn, matplotlib)',
          'Built infrastructure to support storing serialized ML ETF pricer model in DB and loading them 50% faster for pricing (C++ and Python).',
          'Automated ML model training pipeline to allow training for a set of dates for all ETF cusips (Python, scikit-learn) reducing 100% manual labor.',
          'Created Jupyter notebooks for interactive debugging increasing sprint efficiency by 5 points.',
          'Implemented Bond structuring and Market Keys Structuring as a microservice to support the pricing of floating Bonds. (C++, integration test in python)',
        ],
        location: 'New York City',
        icon: 'bloomberg.png',
      },
      {
        company: 'Messagink',
        position: 'Machine Learning Engineer',
        statue: 'Part-time',
        startDate: 'May 2020',
        endDate: 'Jul 2021',
        skills: [
          'Optical Character Recognition',
          'Computer Vision',
          'Deep Learning',
          'Image Processing',
          'Convolutional Neural Networks',
          'Machine Learning',
          'Python (Programming Language)',
        ],
        description: [
          'Built a feature of importing textual conversational story from Whatsapp / Chat Images to textual conversation.',
          'This project was divided into three parts where the first part was extracting text from chat images and showing them in a nice chat format on the website. We used Tesseract OCR and basic math to solve this problem.',
          'Second part was detecting emojis in the chat images. Experimented with different approaches including CNNs and classical image processing. Classic image processing yielded best results. We used SIFT features for matching. We also integrated this model with the text recognition model in the first part.',
          'Last part was noise removal and dark mode integration. Used regex for timestamp removal, patching (black / white) to remove unwanted noise in place of emojis in tesseract OCR and masking dark images, as Tesseract OCR works fine with black text over white background The detailed work is documented here - https://avaninith.medium.com/',
        ],
        location: 'San Francisco Bay Area (Remote)',
        icon: 'messagink.png',
      },
      {
        company: 'Goldman Sachs',
        position: 'Machine Learning Scientist',
        statue: 'Full-time',
        startDate: 'Jul 2018',
        endDate: 'Jan 2021',
        skills: [
          'MLOps',
          'Data Science',
          'MLflow',
          'Matplotlib',
          'pandas',
          'Neural Networks',
          'Scikit-Learn',
          'NumPy',
          'Machine Learning',
          'Algorithms',
          'Python',
        ],
        description: [
          'Developed Stock Selection Framework using Technical Indicators.',
          'Curated dataset with the help of basic stock metrics (OHLCV) and TALIB.',
          'Trained ML models (SVM, Multi Layered Perceptron, Random Forest) on the curated data to learn whether traders should be buying the stock if gain after 3 days of buying is > 2.5%.',
          'Also backtested the model output on test data to compare the loss-gain using different models. Multi Layer Perceptron performed best on all the stock tickers we had. In most of the cases it stayed higher than the buy and hold strategy.',
          'Deployed Stock Selection framework using MLFlow for automated fetching of data, preprocessing, training and inference. This allowed reproducibility, versioning and comparison with previous models.',
          'Experimented with different approaches for building an Anomaly Detector to flag outliers and clean the trading data, allowing business teams to exclude/include data points in reports.',
          'Used BoxPlots, Quartiles, SD, Median, Elbow method for exploratory analyses. And K-means (unsupervised), KNN (supervised) and Isolation Forests formed the core of the anomaly detector.',
        ],
        location: 'Salt Lake City, Utah',
        icon: 'gs.png',
      },
      {
        company:
          'Scientific Computing and Imaging Institute at the University of Utah',
        position:
          'Graduate Research Assistant (Machine Learning + Topological Data Analysis)',
        statue: '',
        startDate: 'Jan 2017',
        endDate: 'May 2018',
        skills: [
          'R',
          'Scikit-Learn',
          'NumPy',
          'Pandas',
          'Python',
          'Risper',
          'Hera',
        ],
        description: [
          'Worked as Research Assistant at Scientific Computing and Imaging Institute at University of Utah Mentor : Professor Bei Wang Phillips.',
          `Classification using Machine Learning and Topological Techniques on Brain Networks data.
Data: From hospitals all over the USA (UCLA Medical Hospital, Utah Medical Hospital) contains time series information of the brains of different subjects.
Problem: Classify Brain Images as healthy (control) / unhealthy (autistic).
Feature Extraction: Used Topology features (mainly landscapes) to extract important features because topology cares about underlying shape of data.
Classification: Used Support Vector Machine
Language: Python and R`,
          `Signal Processing and Topological Analysis of Mice Temperature Data
Data: Mice temperature data from Psychology Department at University of California Berkeley. The data is time series data of body temperature of mice, readings taken every minute.
Approach: Using computational topology (specifically cohomology), we generated a topological signature that can predict whether individual mice were pregnant or not within hours after pairing.
Significance: This can help make some interesting predictions about the biological processes in various species, just by analyzing the temperature data.
Languages : Python, R (Signal Processing), Dionysus Software by Dmitriy Morozov for cohomology computation`,
          `Summer: Study on Graph Theoretical Measures. Clustering Coefficient, Modularity, Assortativity etc.
Built a library for computation of these measures for unweighted graphs.
1 dimensional Cohomology Guiding Classification Here we are trying to see how the 1 Dim Cohomology (loops) can help in classification of a point. Initial Work is using some synthetic datasets with 2 classes. How some points can be classified based on topological distances (Bottleneck and Wasserstein).
Language : Python, Software : Ripser (For Persistence barcodes) and Hera (Topological Distances)`,
        ],
        location: 'Salt Lake City',
        icon: 'uou.png',
      },
      {
        company: 'Indian Institute of Science',
        position: 'Summer Research Fellow',
        statue: '',
        startDate: 'May 2015',
        endDate: 'Jul 2015',
        skills: [],
        description: [
          'Worked as intern at High Performance Computing Lab in Supercomputer Education and Research Center.',
          'StudyAnalysed the unicore X86 architecture and recorded the Translation Look Aside Buffer and Level 2 Cache statistics.',
          'These statistics include collecting hits and misses for each memory instruction for both TLB and L2 cache.',
          'Software: Gem5 simulator and DineroIV cache simulator .',
          'Approach: For collecting these statistics small changes in Code of Gem5 simulator and Dinero IV cache simulator have been done',
          'Research paper pertaining to this project was presented at International Conference on Green Computing and Internet of Things and got published in IEEE proceedings.',
        ],
        location: 'Bangalore, India',
        icon: 'iisc.jpg',
      },
    ],
  },
  education: {
    schools: [
      {
        name: 'University of Utah',
        degree: "Master's Degree",
        major: 'Computer Science',
        startDate: '2016',
        endDate: '2018',
        gpa: '3.98/4',
        description: `Areas of interest include Machine Learning, Natural language Processing, Data Mining, Computational Topology.
Thesis: Topological Analysis and Visualization of Mice Temperature Data For Exploring Biological Events.
Won Best Poster award for Coreference Resolution System Project in Natural language Processing Class (CS - 6340).`,
        icon: 'uou.png',
      },
      {
        name: 'National Institute of Technology Hamirpur',
        degree: "Bachelor's Degree",
        major: 'Computer Science and Engineering',
        startDate: '2012',
        endDate: '2016',
        gpa: '9.18/10',
        description: `Member of GLUG (GNU/Linux User Group) where we made students aware of open source, FORCE (Forum of Computer Science Engineers) at NITH. Conducted fun events, quizzes etc.
Was also part of .EXE Team (Departmental Team of CSE during technical festival NIMBUS). Organized technical events, competitions during NIMBUS. 
Seminar Title: Honey bees mating optimization algorithm for the Euclidean travelling salesman problem.`,
        icon: 'nith-2.png',
      },
      {
        name: 'D.A.V. Public School Hamirpur, Himachal Pradesh',
        degree: 'High School',
        major: 'Maths',
        startDate: '2010',
        endDate: '2012',
        gpa: '92.6%',
        description: '',
        icon: 'dav.jpeg',
      },
    ],
  },
};
