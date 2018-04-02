Feature: User input
  As a user of the Bowling App
  In order to keep track of my scores
  I want to be able to enter my scores for each frame

Scenario: Playing a non-strike, non-spare frame
  Given I want to log my bowling score
  When I enter "5" and "3" into the input boxes
  Then I should see "5" and "3" in the scorecard

#Examples:
#  | roll1 | roll2 |
#  |     5 |     3 |
#  |     4 |     2 |
#  |     1 |     7 |
