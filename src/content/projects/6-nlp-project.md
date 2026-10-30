---
title: "Modern vs. Historical Hebrew"
summary: "An NLP study of whether Modern Hebrew is closer to Biblical or to Rabbinic Hebrew."
kind: university
tech: [Python, DictaBERT, PyTorch, scikit-learn, pandas, Matplotlib]
repo: https://github.com/Nadavsim/hebrew-nlp-analysis
order: 6
---
Built as a pair project, with all of the work done together. We tested a professor's hypothesis that Modern Hebrew is a continuation of Biblical Hebrew by parsing Biblical, Rabbinic and modern corpora with DictaBERT and comparing them on vocabulary, morphology, syntax (tree depth, word order, construct-state vs. "shel" possessives) and infinitive/gerund usage. Distances between corpora were measured with several metrics, and logistic-regression classifiers (10-fold cross-validation) then labelled modern news, blog, medical and literary text as Biblical or Rabbinic under five different linguistic lenses.
