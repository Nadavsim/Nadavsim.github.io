---
title: "Modern vs. Historical Hebrew"
summary: "An NLP study of whether Modern Hebrew is closer to Biblical or to Rabbinic Hebrew."
kind: university
tech: [Python, DictaBERT, PyTorch, scikit-learn, pandas, Matplotlib]
repo: https://github.com/Nadavsim/hebrew-nlp-analysis
shotsLabel: plots
shots:
  - src: /screens/nlp-possessives.png
    alt: Bar chart of possessive constructions, construct-state versus "shel", across Bible, Mishna, Rambam and Modern Hebrew
    w: 1400
    h: 741
  - src: /screens/nlp-infinitive-gerund.png
    alt: Bar chart of infinitive versus gerund usage across Bible, Mishna, Rambam and Modern Hebrew
    w: 1400
    h: 740
  - src: /screens/nlp-tree-depth.png
    alt: Chart of syntactic tree depth across Bible, Mishna, Rambam and Modern Hebrew
    w: 1400
    h: 740
figure: nlp
order: 6
---
Built as a pair, with all of the work done together. We parsed Biblical, Rabbinic and modern Hebrew with DictaBERT, compared them on vocabulary, morphology and syntax using several distance metrics, and trained classifiers to label modern text as Biblical or Rabbinic.
