# spreadsheets-Join-Ranges
Simple object to bring SQL inner join behavior to Google sheets.

## Usage
`
    =rangeUnion( B2:D3, B6:E8, 1, 2 )
`

### Parameters
1. any range
2. any range
3. column-number from range 1
    * first column in range = 1
4. column-number from range 2
    * first column in range = 1

# Example

|   | A | B | C | D | E |
| --- | --- | --- | --- | --- | --- |
| 1   |     | **ID**  | **Name** | **money** | **itemGroup** |
| 2   |     | 11  | Bob | 2.22 | 1 |
| 3   |     | 12  | Sally | 3.21 | 1 |
| 4   |     |   |  |  | |
| 5   |     | **GroupID** | **thingName** | **count** | |
| 6   |     | 2  | rocks | 3 | |
| 7   |     | 1  | books | 6 | |
| 8   |     | 1  | computers | 1 | |
| 9   |     | 1  | mice | 7 | |
| 10   |     |   |  |  | |
| 11   |  *rangeUnion*   |   |  |  | |

### Result
Placing `=rangeUnion( B2:E3, B6DE9, 4, 1 )` in cell A11:

|   | A | B | C | D | E |
| --- | --- | --- | --- | --- | --- |
| 7   |     | 1  | books | 6 | |
| 8   |     | 1  | computers | 1 | |
| 9   |     | 1  | mice | 7 | |
| 10   |     |   |  |  | |
| 11   |  books | 6  | 11 | Bob | 2.22 |
| 12   |  computers | 1  | 11 | Bob | 2.22 |
| 13   |  mice | 7  | 11 | Bob | 2.22 |
| 14   |  books | 6  | 12 | Sally | 3.21 |
| 15   |  computers | 1  | 12 | Sally | 3.21 |
| 16   |  mice | 7  | 12 | Sally | 3.21 |
| 16   |     |   |  |  | |
| 17   |     |   |  |  | |
