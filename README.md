# Akan Name Generator

Discover the Akan day-name given to you at birth. Among the Akan people of
Ghana, a child's first name isn't chosen — it's inherited from the day of
the week they were born, a tradition known as **kradin** (soul name). This
app calculates that day from any birthdate and reveals the corresponding
name.

**Live site:** _add your GitHub Pages URL here after deploying_

## Description

Enter a birthdate and select a gender, and the app will:

1. Validate the date (real day/month combination, including leap years).
2. Calculate the day of the week the date fell on, using a Zeller-style
   congruence formula (see below).
3. Look up the matching Akan day-name for the selected gender and display
   it, alongside the full reference table of all seven names.

| Day       | Male Name | Female Name |
| --------- | --------- | ----------- |
| Sunday    | Kwasi     | Akosua      |
| Monday    | Kwadwo    | Adwoa       |
| Tuesday   | Kwabena   | Abenaa      |
| Wednesday | Kwaku     | Akua        |
| Thursday  | Yaw       | Yaa         |
| Friday    | Kofi      | Afua        |
| Saturday  | Kwame     | Ama         |

## How the day is calculated