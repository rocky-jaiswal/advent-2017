(ns advent-2017.day1)

(defn specialReduce [coll]
  (let [indexedColl (zipmap (range (count coll)) coll) len (count coll)]
    (reduce (fn [acc e]
      (let [idx (if (= (key e) (- len 1)) 0 (+ 1 (key e)))]
        (if (= (nth coll idx) (val e)) (+ acc (val e)) acc)))
        0 indexedColl)))

(defn captcha [num]
  (specialReduce
    (map #(Integer. %)
      (clojure.string/split (str num) #""))))

