(ns advent-2017.day2)

(defn toArr [line]
  (map #(Integer. %)
    (clojure.string/split line #"\s")))

(defn maxMinDiff [coll]
  (-
    (apply max coll)
    (apply min coll)))

(defn checksum [input]
  (->> (clojure.string/split input #"\n")
    (map toArr)
    (map maxMinDiff)
    (reduce +)))

