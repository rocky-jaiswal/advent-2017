(ns advent-2017.day2-test
  (:require [clojure.test :refer :all]
            [advent-2017.day2 :refer :all]))

(def input1 "5 1 9 5
7 5 3
2 4 6 8")

(deftest sample-test
  (testing "test with sample data - 1"
    (is (= (checksum input1) 18))))
