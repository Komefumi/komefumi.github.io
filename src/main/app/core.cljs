(ns app.core
  (:require [reagent.dom.client :as rdom]))

(defonce react-root (atom nil))

(defn bio-section []
  [:section {:class "section"}
   [:div {:class "container"}
    [:div {:class "columns is-centered"}
     [:div {:class "column is-two-thirds"}

      ;; Introduction
      [:h1 {:class "title is-2 mb-5"}
       "Hi, I'm a Clojure + JS developer."]
      [:p {:class "subtitle is-4 has-text-grey-dark mb-6"}
       "Starting over all over again!"]

      ;; Core Strengths
      [:div {:class "content is-medium mb-6"}
       [:p "My strengths include "
        [:strong "tinkering"] ", looking for "
        [:em "more"] " than what is readily available, questioning conventions, and relentlessly seeking better ways to build."]
       [:p "I don't just use tools—I want to understand why they work, or why they don't."]]

      [:hr {:class "has-background-light my-6"}]

      ;; Lightning & Reliability Notice
      [:div {:class "notification is-warning is-light"}
       [:h2 {:class "title is-5 mb-2"}
        "⚡ A Quick Note on Availability"]
       [:div {:class "content is-normal"}
        [:p "Because I live in Kerala, lightning is a real daily concern. I stay vigilant and proactively turn off my electronics whenever there is a perceived storm risk."]
        [:p [:strong "The flip side: "] "I am entirely committed to covering lost time, doing whatever it takes to deliver. Effectively, this means you will notice " [:em "zero difference"] " in timelines for any project goals spanning a week or more. The work always gets done."]]]]]]])


(defn ^:dev/after-load render []
  (let [el (.getElementById js/document "app")]
    ;; 2. If the root doesn't exist yet, create it and store it in our atom
    (when-not @react-root
      (reset! react-root (rdom/create-root el)))
    ;; 3. Pass the root instance and the component to rdom/render
    (rdom/render @react-root [bio-section])))

(defn init []
  (render))