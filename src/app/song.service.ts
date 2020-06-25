import { Injectable } from '@angular/core';
import * as _ from 'underscore';
import { Song } from './song';



const allSongs = [
    {
      id: ' 0vbuJjvWo7k1aBYLN0jwQC ',
      album: ' M.O.O.D. Musik ',
      name: ' If I Die Tomorrow ',
      plays:  0 ,
      popularity:  0 ,
      rank:  192
    },
    {
      id: ' 1x4qkE76won3AKiBtLGjyh ',
      album: ' Aotearoa (The Remixes) ',
      name: ' Aotearoa - Lucero Remix ',
      plays:  2201 ,
      popularity:  0 ,
      rank:  191
    },
    {
      id: ' 5P507JUT8EshUCcMLVeXAN ',
      album: ' Jam in the Van - Lucero (Live Session, Memphis, TN, 2019) ',
      name: ' Everything Has Changed - Live Session, Memphis, TN, 2019 ',
      plays:  3399 ,
      popularity:  11 ,
      rank:  190
    },
    {
      id: ' 48vwpgdDTLMkj8j4v2ldLK ',
      album: ' Mud (Original Motion Picture Soundtrack) ',
      name: ' Take You Away ',
      plays:  3765 ,
      popularity:  0 ,
      rank:  189
    },
    {
      id: ' 5HQnPOag5esFUFt5a1uyKS ',
      album: ' Jam in the Van - Lucero (Live Session, Memphis, TN, 2019) ',
      name: ' I Can\'t Stand to Leave You - Live Session, Memphis, TN, 2019 ',
      plays:  3783 ,
      popularity:  12 ,
      rank:  188
    },
    {
      id: ' 15PHSze6pXVcTyV3N2Opzv ',
      album: ' Jam in the Van - Lucero (Live Session, Memphis, TN, 2019) ',
      name: ' Long Way Back Home - Live Session, Memphis, TN, 2019 ',
      plays:  4137 ,
      popularity:  13 ,
      rank:  187
    },
    {
      id: ' 1v8LWxBLTEJ0fHpUppfazd ',
      album: ' Mud (Original Motion Picture Soundtrack) ',
      name: ' Opening ',
      plays:  8142 ,
      popularity:  9 ,
      rank:  186
    },
    {
      id: ' 3CoskONhZJkjirafHKtPSG ',
      album: ' Mud (Original Motion Picture Soundtrack) ',
      name: ' Snakebite ',
      plays:  10188 ,
      popularity:  8 ,
      rank:  185
    },
    {
      id: ' 73e8V9wWJUApTXwr5VMdU8 ',
      album: ' Mud (Original Motion Picture Soundtrack) ',
      name: ' Everything You Need ',
      plays:  10664 ,
      popularity:  11 ,
      rank:  184
    },
    {
      id: ' 5GVV9ZC8tGN9SaPotf8bSD ',
      album: ' Before the Ghosts: Acoustic Demos and Other Ideas from Among the Ghosts ',
      name: ' Long Way Back Home (Demo) ',
      plays:  15786 ,
      popularity:  14 ,
      rank:  183
    },
    {
      id: ' 6o1RwHnSrQhZswaxF0VIvh ',
      album: ' Before the Ghosts: Acoustic Demos and Other Ideas from Among the Ghosts ',
      name: ' Loving (2016 Demo) ',
      plays:  16743 ,
      popularity:  15 ,
      rank:  182
    },
    {
      id: ' 44QuSsgHyNCOjLDNnNOrSw ',
      album: ' Before the Ghosts: Acoustic Demos and Other Ideas from Among the Ghosts ',
      name: ' Cover Me (Acoustic Version) ',
      plays:  19145 ,
      popularity:  16 ,
      rank:  181
    },
    {
      id: ' 3nMtq6QmIoy9VQ2HTLoplh ',
      album: ' Before the Ghosts: Acoustic Demos and Other Ideas from Among the Ghosts ',
      name: ' To My Dearest Wife (Acoustic Version) ',
      plays:  19749 ,
      popularity:  16 ,
      rank:  180
    },
    {
      id: ' 10sGSNZ4IRfoqdjy2HoOCm ',
      album: ' Before the Ghosts: Acoustic Demos and Other Ideas from Among the Ghosts ',
      name: ' Everything Has Changed (Acoustic Version) ',
      plays:  21074 ,
      popularity:  16 ,
      rank:  179
    },
    {
      id: ' 7jP7LYDMFeZdsJrSWIRRDv ',
      album: ' Before the Ghosts: Acoustic Demos and Other Ideas from Among the Ghosts ',
      name: ' Always Been You (Acoustic Version) ',
      plays:  22531 ,
      popularity:  17 ,
      rank:  178
    },
    {
      id: ' 2RyIlISLEY1CaUzcecKkrM ',
      album: ' Before the Ghosts: Acoustic Demos and Other Ideas from Among the Ghosts ',
      name: ' Bottom of the Sea (Demo) ',
      plays:  22629 ,
      popularity:  17 ,
      rank:  177
    },
    {
      id: ' 5rrNEmSvsdCps4Fcox7fE6 ',
      album: ' Before the Ghosts: Acoustic Demos and Other Ideas from Among the Ghosts ',
      name: ' Back to the Night (Scratch Vocal Version) ',
      plays:  25789 ,
      popularity:  15 ,
      rank:  176
    },
    {
      id: ' 3tA7IHThHLPw6xU2Fpx2Lu ',
      album: ' Before the Ghosts: Acoustic Demos and Other Ideas from Among the Ghosts ',
      name: ' Among The Ghosts (Acoustic Version) ',
      plays:  30863 ,
      popularity:  19 ,
      rank:  175
    },
    {
      id: ' 373G49CkaH6kjXO64dLKJq ',
      album: ' Before the Ghosts: Acoustic Demos and Other Ideas from Among the Ghosts ',
      name: ' Piano Stem from Long Way Back Home ',
      plays:  32956 ,
      popularity:  14 ,
      rank:  174
    },
    {
      id: ' 2QwhwYdo3NH4YgXJeeGo9Y ',
      album: ' Songs for Slim: Rockin\' Here Tonight – A Benefit Compilation for Slim Dunlap ',
      name: ' From the Git Go ',
      plays:  36758 ,
      popularity:  4 ,
      rank:  173
    },
    {
      id: ' 4XjKe8cl9yjJ1bLzylAzsk ',
      album: ' Before the Ghosts: Acoustic Demos and Other Ideas from Among the Ghosts ',
      name: ' For the Lonely Ones (Acoustic Version) ',
      plays:  41266 ,
      popularity:  15 ,
      rank:  172
    },
    {
      id: ' 7ic1j5w4nj1Bg76zPoqy1c ',
      album: ' Lucero Live at Cat\'s Cradle 09/24/2004 ',
      name: ' Hate and Jealousy ',
      plays:  51333 ,
      popularity:  8 ,
      rank:  171
    },
    {
      id: ' 7l0EESr8vHMKC9sU8FTfRQ ',
      album: ' Lucero Live at Cat\'s Cradle 09/24/2004 ',
      name: ' Raising Hell ',
      plays:  53438 ,
      popularity:  8 ,
      rank:  170
    },
    {
      id: ' 2u9SyEfqukX6HokhdTSnpN ',
      album: ' My Name is Izzy ',
      name: ' \'84 300zx (with T-Tops) ',
      plays:  55396 ,
      popularity:  15 ,
      rank:  169
    },
    {
      id: ' 3PSGn3wPA3KlXdB0Mgm3rs ',
      album: ' Lucero Live at Cat\'s Cradle 09/24/2004 ',
      name: ' Hold Me Close ',
      plays:  57608 ,
      popularity:  8 ,
      rank:  168
    },
    {
      id: ' 7dh2t6ghcOVqLgj6zu3ig2 ',
      album: ' Lucero Live at Cat\'s Cradle 09/24/2004 ',
      name: ' And We Fell ',
      plays:  57693 ,
      popularity:  8 ,
      rank:  167
    },
    {
      id: ' 325aatgjsx8WgHq5C9xuUR ',
      album: ' Lucero Live at Cat\'s Cradle 09/24/2004 ',
      name: ' Bikeriders ',
      plays:  57744 ,
      popularity:  8 ,
      rank:  166
    },
    {
      id: ' 1vNCj5RfalcrjxmekBusLd ',
      album: ' Lucero Live at Cat\'s Cradle 09/24/2004 ',
      name: ' That Much Further West ',
      plays:  58798 ,
      popularity:  9 ,
      rank:  165
    },
    {
      id: ' 5SGZg9EHws2mlcg5hP2O6y ',
      album: ' Lucero Live at Cat\'s Cradle 09/24/2004 ',
      name: ' The War ',
      plays:  62483 ,
      popularity:  8 ,
      rank:  164
    },
    {
      id: ' 2cbgaFF9x5fx8GeA4jWlyo ',
      album: ' High Cotton: The Songs of Alabama ',
      name: ' The Closer You Get ',
      plays:  63865 ,
      popularity:  4 ,
      rank:  163
    },
    {
      id: ' 3NR2FuFiSZy2THpE8cRxcn ',
      album: ' Lucero Live at Cat\'s Cradle 09/24/2004 ',
      name: ' Drink Till We\'re Gone ',
      plays:  67223 ,
      popularity:  8 ,
      rank:  162
    },
    {
      id: ' 18TOPW586AEU70XOPNh8sR ',
      album: ' Lucero Live at Cat\'s Cradle 09/24/2004 ',
      name: ' Tears Don\'t Matter Much ',
      plays:  69508 ,
      popularity:  10 ,
      rank:  161
    },
    {
      id: ' 22UvwOJCMj0Uo3aRPeU7K5 ',
      album: ' Lucero Live at Cat\'s Cradle 09/24/2004 ',
      name: ' Across the River ',
      plays:  69725 ,
      popularity:  9 ,
      rank:  160
    },
    {
      id: ' 3TNDDUhSzd8nJGskh8aJBQ ',
      album: ' Lucero Live at Cat\'s Cradle 09/24/2004 ',
      name: ' Kiss the Bottle ',
      plays:  76812 ,
      popularity:  10 ,
      rank:  159
    },
    {
      id: ' 41Qsb4U04ucKSHunqMrP3X ',
      album: ' Live from Atlanta ',
      name: ' The Last Song ',
      plays:  94259 ,
      popularity:  6 ,
      rank:  158
    },
    {
      id: ' 47BUdjgxRK94mhrYlpeiQX ',
      album: ' Live from Atlanta ',
      name: ' Rick\'s Boogie ',
      plays:  95860 ,
      popularity:  5 ,
      rank:  157
    },
    {
      id: ' 2kBUn5ZXuGWIeIG5lAp489 ',
      album: ' Live from Atlanta ',
      name: ' Bastard\'s Lullaby ',
      plays:  96658 ,
      popularity:  5 ,
      rank:  156
    },
    {
      id: ' 5WnNZTCb6zlRufT7bATzyT ',
      album: ' Live from Atlanta ',
      name: ' Fistful of Tears ',
      plays:  98092 ,
      popularity:  6 ,
      rank:  155
    },
    {
      id: ' 1eQhw0Byy3FflIxHWa8ya1 ',
      album: ' Live from Atlanta ',
      name: ' It May Be Too Late ',
      plays:  104574 ,
      popularity:  5 ,
      rank:  154
    },
    {
      id: ' 4WDRbtKPZFLqEkygLyYsTO ',
      album: ' Live from Atlanta ',
      name: ' A Dangerous Thing ',
      plays:  111663 ,
      popularity:  6 ,
      rank:  153
    },
    {
      id: ' 2tsn62At1u6jcGBZNM30Fq ',
      album: ' My Name is Izzy ',
      name: ' Hello My Name is Izzy ',
      plays:  113735 ,
      popularity:  17 ,
      rank:  152
    },
    {
      id: ' 02HYH71LXyslnRVYugPNed ',
      album: ' That Much Further West ',
      name: ' That Much Further West (Demo) ',
      plays:  116565 ,
      popularity:  14 ,
      rank:  151
    },
    {
      id: ' 5ANAkqaBE3lXvwrczXeaV3 ',
      album: ' Live from Atlanta ',
      name: ' What Else Would You Have Me Be? ',
      plays:  118092 ,
      popularity:  6 ,
      rank:  150
    },
    {
      id: ' 4L1HbNyqPTcdduiahp5KpY ',
      album: ' The Attic Tapes ',
      name: ' So Long Tonight ',
      plays:  119537 ,
      popularity:  5 ,
      rank:  149
    },
    {
      id: ' 0uuSQyZTveCOR7kqYC6u5f ',
      album: ' Live from Atlanta ',
      name: ' All Sewn Up ',
      plays:  121828 ,
      popularity:  6 ,
      rank:  148
    },
    {
      id: ' 2G0OXP7FyEQPFaTvkmkGga ',
      album: ' The Attic Tapes ',
      name: ' Wish Me Luck ',
      plays:  129388 ,
      popularity:  5 ,
      rank:  147
    },
    {
      id: ' 3VWYuMRbwulNuE5SiPbPTo ',
      album: ' The Attic Tapes ',
      name: ' Katherine and Me ',
      plays:  133836 ,
      popularity:  5 ,
      rank:  146
    },
    {
      id: ' 7pXFDfmnVd3ShGyIaWXB3M ',
      album: ' Live from Atlanta ',
      name: ' Drink Till We\'re Gone ',
      plays:  134611 ,
      popularity:  7 ,
      rank:  145
    },
    {
      id: ' 0VwoyTnMoQbyldjHu8LMBU ',
      album: ' Live from Atlanta ',
      name: ' Like Lightning ',
      plays:  137605 ,
      popularity:  7 ,
      rank:  144
    },
    {
      id: ' 4czX0nI9RGyARb8neEVHv0 ',
      album: ' Live from Atlanta ',
      name: ' Juniper ',
      plays:  138947 ,
      popularity:  7 ,
      rank:  143
    },
    {
      id: ' 6vF8cAtfQEZkXZlFGnjb3X ',
      album: ' Live from Atlanta ',
      name: ' That Much Further West ',
      plays:  141995 ,
      popularity:  7 ,
      rank:  142
    },
    {
      id: ' 20iwJDNTwAitRvP7IXpVF8 ',
      album: ' Live from Atlanta ',
      name: ' Mom ',
      plays:  144307 ,
      popularity:  7 ,
      rank:  141
    },
    {
      id: ' 2kqBsUXCJSLXQUQTe2i18H ',
      album: ' Live from Atlanta ',
      name: ' Tonight Ain\'t Gonna Be Good ',
      plays:  146277 ,
      popularity:  8 ,
      rank:  140
    },
    {
      id: ' 1blJbL6hNA3rolnmjIR2Mq ',
      album: ' Live from Atlanta ',
      name: ' The War ',
      plays:  146414 ,
      popularity:  8 ,
      rank:  139
    },
    {
      id: ' 20n4Ge8WRTrD4YPr0csCt0 ',
      album: ' Texas & Tennessee ',
      name: ' Breathless Love ',
      plays:  147342 ,
      popularity:  15 ,
      rank:  138
    },
    {
      id: ' 3LegAuw4rx0R1VkWPSAn61 ',
      album: ' The Attic Tapes ',
      name: ' Took The Fall ',
      plays:  147912 ,
      popularity:  6 ,
      rank:  137
    },
    {
      id: ' 3ieYTGt0f2MgPhHeHK9gyw ',
      album: ' Live from Atlanta ',
      name: ' Summer Song ',
      plays:  149504 ,
      popularity:  7 ,
      rank:  136
    },
    {
      id: ' 60CBEHo73ZrqITHQWr3Y8T ',
      album: ' Live from Atlanta ',
      name: ' It Gets the Worst at Night ',
      plays:  151514 ,
      popularity:  8 ,
      rank:  135
    },
    {
      id: ' 1u4jeSemWuozzwTydC8vMx ',
      album: ' Live from Atlanta ',
      name: ' Tears Don\'t Matter Much ',
      plays:  154635 ,
      popularity:  8 ,
      rank:  134
    },
    {
      id: ' 6IYOiVrAN85hRVhKXFhQ2G ',
      album: ' Live from Atlanta ',
      name: ' My Best Girl ',
      plays:  158852 ,
      popularity:  8 ,
      rank:  133
    },
    {
      id: ' 24ubDOHN096t0eFzyXXzyB ',
      album: ' The Attic Tapes ',
      name: ' In Lonesome Times ',
      plays:  161351 ,
      popularity:  6 ,
      rank:  132
    },
    {
      id: ' 0P6qanPRddaxQii5dhkEXQ ',
      album: ' Live from Atlanta ',
      name: ' Breathless Love ',
      plays:  163392 ,
      popularity:  8 ,
      rank:  131
    },
    {
      id: ' 1JNgBBCHR7bLUGzDhTl4gq ',
      album: ' The Attic Tapes ',
      name: ' Gone to the Sea ',
      plays:  164109 ,
      popularity:  6 ,
      rank:  130
    },
    {
      id: ' 0cebZ2EJ6mdeW4BIHd0T8m ',
      album: ' The Attic Tapes ',
      name: ' The Blue and the Gray ',
      plays:  166516 ,
      popularity:  7 ,
      rank:  129
    },
    {
      id: ' 6jAXyxg3VMN8qfli3eLpbU ',
      album: ' Women & Work ',
      name: ' I Want Your Love - Bonus Track ',
      plays:  168886 ,
      popularity:  0 ,
      rank:  128
    },
    {
      id: ' 39fIeVcH2siFBRJFZgwSci ',
      album: ' The Attic Tapes ',
      name: ' Summer Song ',
      plays:  171658 ,
      popularity:  6 ,
      rank:  127
    },
    {
      id: ' 52MuBgk9iwshAQW1DJ5IPX ',
      album: ' The Attic Tapes ',
      name: ' A Heart So True ',
      plays:  171785 ,
      popularity:  7 ,
      rank:  126
    },
    {
      id: ' 5GO1zdzg6wshLorXhvEZe1 ',
      album: ' 1372 Overton Park ',
      name: ' Johnny Davis ',
      plays:  176340 ,
      popularity:  17 ,
      rank:  125
    },
    {
      id: ' 2RdeVh1qhItPeZmw1HdTa1 ',
      album: ' Among the Ghosts ',
      name: ' Back to the Night ',
      plays:  178662 ,
      popularity:  22 ,
      rank:  124
    },
    {
      id: ' 5j7lGYzIjx1aKCYMfUUF7G ',
      album: ' 1372 Overton Park ',
      name: ' Halfway Wrong ',
      plays:  179695 ,
      popularity:  17 ,
      rank:  123
    },
    {
      id: ' 5Wtuv752tzOP3gHij7JUUs ',
      album: ' Live from Atlanta ',
      name: ' Women & Work ',
      plays:  181820 ,
      popularity:  9 ,
      rank:  122
    },
    {
      id: ' 54DTI6OU8yAEzLVE9H7zdM ',
      album: ' That Much Further West ',
      name: ' When You Decided To Leave ',
      plays:  186080 ,
      popularity:  17 ,
      rank:  121
    },
    {
      id: ' 0Fri7K7WI9GkCXem3HBZvT ',
      album: ' That Much Further West ',
      name: ' Coming Home ',
      plays:  188561 ,
      popularity:  18 ,
      rank:  120
    },
    {
      id: ' 60xPTjJZy2NfvqqKk5y5nU ',
      album: ' That Much Further West ',
      name: ' Joining the Army ',
      plays:  189781 ,
      popularity:  17 ,
      rank:  119
    },
    {
      id: ' 3MhDKVmJKv1HrtnMjQSnmX ',
      album: ' The Attic Tapes ',
      name: ' Into Your Eyes ',
      plays:  193787 ,
      popularity:  6 ,
      rank:  118
    },
    {
      id: ' 1JeNkPPm6eDoNzVdJ9jo49 ',
      album: ' Live from Atlanta ',
      name: ' Raising Hell ',
      plays:  202047 ,
      popularity:  9 ,
      rank:  117
    },
    {
      id: ' 2TOK43L6QkYSoyazB9TxpL ',
      album: ' The Attic Tapes ',
      name: ' Hello Sadness ',
      plays:  203781 ,
      popularity:  7 ,
      rank:  116
    },
    {
      id: ' 1cOhYz3fE6kkmoA3eAnkgQ ',
      album: ' That Much Further West ',
      name: ' Hate and Jealousy ',
      plays:  204758 ,
      popularity:  18 ,
      rank:  115
    },
    {
      id: ' 4x7Gtye0Wv9MgAnk5rxdq2 ',
      album: ' Live from Atlanta ',
      name: ' Sounds of the City ',
      plays:  207266 ,
      popularity:  9 ,
      rank:  114
    },
    {
      id: ' 7AoUQSfi8mmPPHpgz8JMoi ',
      album: ' The Attic Tapes ',
      name: ' Diamond State Heartbreak ',
      plays:  211669 ,
      popularity:  8 ,
      rank:  113
    },
    {
      id: ' 21YA8mSTBLDadnLnMDSJfZ ',
      album: ' That Much Further West ',
      name: ' Sad and Lonely ',
      plays:  212294 ,
      popularity:  18 ,
      rank:  112
    },
    {
      id: ' 2jYMTlNhNB5LXoqLtq5Nxw ',
      album: ' Rebels, Rogues & Sworn Brothers ',
      name: ' The Weight of Guilt ',
      plays:  214842 ,
      popularity:  8 ,
      rank:  111
    },
    {
      id: ' 5WCrXuiitCai2xhIcGM4Dy ',
      album: ' Live from Atlanta ',
      name: ' Slow Dancing ',
      plays:  215235 ,
      popularity:  10 ,
      rank:  110
    },
    {
      id: ' 5BrUrRGBnkXabmwbE9QDUG ',
      album: ' Live from Atlanta ',
      name: ' Sweet Little Thing ',
      plays:  217007 ,
      popularity:  9 ,
      rank:  109
    },
    {
      id: ' 0QfetrnHyKL5ALkbGC99uA ',
      album: ' 1372 Overton Park ',
      name: ' Goodbye Again ',
      plays:  217437 ,
      popularity:  18 ,
      rank:  108
    },
    {
      id: ' 42tgUW4KHhnqVPpPoOAgSE ',
      album: ' Live from Atlanta ',
      name: ' Goodbye Again ',
      plays:  218275 ,
      popularity:  14 ,
      rank:  107
    },
    {
      id: ' 5Pd37cxXsxYelCp9fCYU2a ',
      album: ' Lucero ',
      name: ' No Roses No More ',
      plays:  218651 ,
      popularity:  10 ,
      rank:  106
    },
    {
      id: ' 1EkVXBwURV9g64pqWwIFYQ ',
      album: ' That Much Further West ',
      name: ' Across The River ',
      plays:  223206 ,
      popularity:  20 ,
      rank:  105
    },
    {
      id: ' 46T9iH44y06cSGl9PrXOYx ',
      album: ' Live from Atlanta ',
      name: ' Texas & Tennessee ',
      plays:  223435 ,
      popularity:  10 ,
      rank:  104
    },
    {
      id: ' 65pEsWPRGIzXTQJHC4VqlG ',
      album: ' Texas & Tennessee ',
      name: ' The Other Side of Lonesome ',
      plays:  225252 ,
      popularity:  18 ,
      rank:  103
    },
    {
      id: ' 0V1S9ipeg1LgbmPn2cYJr8 ',
      album: ' Women & Work ',
      name: ' Sometimes ',
      plays:  231128 ,
      popularity:  0 ,
      rank:  102
    },
    {
      id: ' 6y7LgDnhnE1TfT7QM1Shku ',
      album: ' 1372 Overton Park ',
      name: ' Sixes And Sevens ',
      plays:  236219 ,
      popularity:  19 ,
      rank:  101
    },
    {
      id: ' 3WQGqPPJN1BGEqtSsYMR8s ',
      album: ' Rebels, Rogues & Sworn Brothers ',
      name: ' On the Way Back Home ',
      plays:  237481 ,
      popularity:  10 ,
      rank:  100
    },
    {
      id: ' 2B7MoNke2sn1QMg5GijRPf ',
      album: ' The Attic Tapes ',
      name: ' My Best Girl ',
      plays:  238697 ,
      popularity:  8 ,
      rank:  99
    },
    {
      id: ' 6THjGdizEs7JrNri4amohk ',
      album: ' 1372 Overton Park ',
      name: ' The Devil And Maggie Chascarillo ',
      plays:  239632 ,
      popularity:  19 ,
      rank:  98
    },
    {
      id: ' 4GDBqSUoTweHVM2rsWulpC ',
      album: ' Women & Work ',
      name: ' Like Lightning ',
      plays:  241718 ,
      popularity:  0 ,
      rank:  97
    },
    {
      id: ' 1myDFKkcESNtMDNH7jqag1 ',
      album: ' Lucero ',
      name: ' Better Than This ',
      plays:  251454 ,
      popularity:  11 ,
      rank:  96
    },
    {
      id: ' 6HKFYAN4nSU1EC1nvj4ndo ',
      album: ' Live from Atlanta ',
      name: ' I\'ll Just Fall ',
      plays:  255886 ,
      popularity:  11 ,
      rank:  95
    },
    {
      id: ' 23CXsYQ4o5Ib9HvPXReoTr ',
      album: ' Women & Work ',
      name: ' Juniper ',
      plays:  257345 ,
      popularity:  0 ,
      rank:  94
    },
    {
      id: ' 4sCOBBvpgj83qLZtcLMD45 ',
      album: ' Nobody\'s Darlings ',
      name: ' Noon As Dark As Midnight ',
      plays:  259156 ,
      popularity:  10 ,
      rank:  93
    },
    {
      id: ' 4XBr8KQFlJMXWJmJkslvRr ',
      album: ' 1372 Overton Park ',
      name: ' Sounds Of The City ',
      plays:  260067 ,
      popularity:  20 ,
      rank:  92
    },
    {
      id: ' 4GWAP1vppIyQ21edvRa5t2 ',
      album: ' Rebels, Rogues & Sworn Brothers ',
      name: ' Cass ',
      plays:  262637 ,
      popularity:  10 ,
      rank:  91
    },
    {
      id: ' 1OmNGaR4vB6MnLLsviqkDh ',
      album: ' Live from Atlanta ',
      name: ' On My Way Downtown ',
      plays:  266026 ,
      popularity:  11 ,
      rank:  90
    },
    {
      id: ' 7bOaBLTwJol2VIcow42jFR ',
      album: ' Nobody\'s Darlings ',
      name: ' California ',
      plays:  266224 ,
      popularity:  10 ,
      rank:  89
    },
    {
      id: ' 2SJstmdKWninQ52M0THc1K ',
      album: ' Women & Work ',
      name: ' Go Easy ',
      plays:  271251 ,
      popularity:  0 ,
      rank:  88
    },
    {
      id: ' 7qaW0QrIIJayKteT2LJ4IG ',
      album: ' Women & Work ',
      name: ' Who You Waiting On? ',
      plays:  274042 ,
      popularity:  0 ,
      rank:  87
    },
    {
      id: ' 0KmVybOgJCSSJN3lRxaciY ',
      album: ' Among the Ghosts ',
      name: ' Loving ',
      plays:  277775 ,
      popularity:  27 ,
      rank:  86
    },
    {
      id: ' 422uu5YiqBEtEvP8gxqfS0 ',
      album: ' Nobody\'s Darlings ',
      name: ' And We Fell ',
      plays:  283290 ,
      popularity:  11 ,
      rank:  85
    },
    {
      id: ' 24d9fCrL6iBJnGqdnC8wrS ',
      album: ' Live from Atlanta ',
      name: ' Nights Like These ',
      plays:  286815 ,
      popularity:  11 ,
      rank:  84
    },
    {
      id: ' 7zeh4Olap7FQRRNU23Oqtp ',
      album: ' Rebels, Rogues & Sworn Brothers ',
      name: ' Sing Me No Hymns ',
      plays:  288176 ,
      popularity:  15 ,
      rank:  83
    },
    {
      id: ' 6Dg1pyt0ZkJCB2dnnS9cxG ',
      album: ' That Much Further West ',
      name: ' Tonight Ain\'t Gonna Be Good ',
      plays:  293580 ,
      popularity:  26 ,
      rank:  82
    },
    {
      id: ' 0AyZK2VKGWhjo1isd8oFUT ',
      album: ' Nobody\'s Darlings ',
      name: ' Last Night In Town ',
      plays:  294389 ,
      popularity:  12 ,
      rank:  81
    },
    {
      id: ' 4nK132zGXzSNTiiZqznAbu ',
      album: ' Women & Work ',
      name: ' Downtown (Intro) ',
      plays:  300153 ,
      popularity:  0 ,
      rank:  80
    },
    {
      id: ' 5Miv6hED0CMUh3kNia5QkK ',
      album: ' Rebels, Rogues & Sworn Brothers ',
      name: ' The Mountain ',
      plays:  303640 ,
      popularity:  12 ,
      rank:  79
    },
    {
      id: ' 5hxoFfBLY5vz1LcyklgGJW ',
      album: ' Rebels, Rogues & Sworn Brothers ',
      name: ' Nineteen Seventy Nine ',
      plays:  306280 ,
      popularity:  10 ,
      rank:  78
    },
    {
      id: ' 0y3qhsXpRSScE5NmQdXoqM ',
      album: ' Lucero ',
      name: ' Banks Of The Arkansas ',
      plays:  306810 ,
      popularity:  12 ,
      rank:  77
    },
    {
      id: ' 2l48WsxSUtmr5s1Sm31igK ',
      album: ' Lucero ',
      name: ' Hold Fast ',
      plays:  308405 ,
      popularity:  12 ,
      rank:  76
    },
    {
      id: ' 3qEK2qy0vHttvphrCbI6Hd ',
      album: ' Women & Work ',
      name: ' It May Be Too Late ',
      plays:  309036 ,
      popularity:  0 ,
      rank:  75
    },
    {
      id: ' 7fMiFQesZG2YmNDCg9XaKm ',
      album: ' Rebels, Rogues & Sworn Brothers ',
      name: ' She Wakes When She Dreams ',
      plays:  310126 ,
      popularity:  10 ,
      rank:  74
    },
    {
      id: ' 6edtOahEVs1gD1doVvnitk ',
      album: ' Rebels, Rogues & Sworn Brothers ',
      name: ' I Don\'t Wanna Be The One ',
      plays:  312267 ,
      popularity:  10 ,
      rank:  73
    },
    {
      id: ' 0YumJ0ZSA6PAmyjazS6SwT ',
      album: ' Tennessee ',
      name: ' Darby\'s Song ',
      plays:  315572 ,
      popularity:  22 ,
      rank:  72
    },
    {
      id: ' 0wm2MoZkBaQywk1t32FCgZ ',
      album: ' Lucero ',
      name: ' All These Love Songs ',
      plays:  317638 ,
      popularity:  13 ,
      rank:  71
    },
    {
      id: ' 6RJYjbTpL66dgpXKITgH67 ',
      album: ' Long Way Back Home ',
      name: ' Long Way Back Home ',
      plays:  321640 ,
      popularity:  12 ,
      rank:  70
    },
    {
      id: ' 4ZC6rUc1fxqNlXAKu5hVQ4 ',
      album: ' Cover Me ',
      name: ' Cover Me ',
      plays:  325021 ,
      popularity:  0 ,
      rank:  69
    },
    {
      id: ' 2LUWgnefqmgptkoBefXfhG ',
      album: ' That Much Further West ',
      name: ' The Only One ',
      plays:  325100 ,
      popularity:  26 ,
      rank:  68
    },
    {
      id: ' 6pnfM8AyGV0rVt4ZeC9OPg ',
      album: ' Tennessee ',
      name: ' Into Your Eyes ',
      plays:  328485 ,
      popularity:  23 ,
      rank:  67
    },
    {
      id: ' 6PHt6vfxsR0ti3VdWUKLRJ ',
      album: ' All a Man Should Do ',
      name: ' Young Outlaws ',
      plays:  340153 ,
      popularity:  5 ,
      rank:  66
    },
    {
      id: ' 4HQjpxt1KnYnEV1HBWM3OC ',
      album: ' Rebels, Rogues & Sworn Brothers ',
      name: ' San Francisco ',
      plays:  345564 ,
      popularity:  12 ,
      rank:  65
    },
    {
      id: ' 39OY03JPFC6DQnfcI3H9o3 ',
      album: ' Live from Atlanta ',
      name: ' Union Pacific Line ',
      plays:  352163 ,
      popularity:  18 ,
      rank:  64
    },
    {
      id: ' 5chv59xGFgsFxYEWCWkS52 ',
      album: ' That Much Further West ',
      name: ' Mine Tonight ',
      plays:  352987 ,
      popularity:  27 ,
      rank:  63
    },
    {
      id: ' 150c5rQVKhw4CMizp1SUH8 ',
      album: ' Women & Work ',
      name: ' I Can\'t Stand To Leave You ',
      plays:  355360 ,
      popularity:  0 ,
      rank:  62
    },
    {
      id: ' 6dO1hQfZdv05OXctO6PWOi ',
      album: ' Women & Work ',
      name: ' Women & Work ',
      plays:  356844 ,
      popularity:  0 ,
      rank:  61
    },
    {
      id: ' 2HrpLvDoiG9bS9wmbEP8OF ',
      album: ' I\'m in Love With a Girl ',
      name: ' I\'m in Love With a Girl ',
      plays:  358982 ,
      popularity:  0 ,
      rank:  60
    },
    {
      id: ' 5MYTTcEcwLzwjJAxDplfGZ ',
      album: ' Women & Work ',
      name: ' When I Was Young ',
      plays:  359028 ,
      popularity:  0 ,
      rank:  59
    },
    {
      id: ' 6VO1ulj9Nf2d00doM3wgEi ',
      album: ' Lucero ',
      name: ' Wasted ',
      plays:  359501 ,
      popularity:  13 ,
      rank:  58
    },
    {
      id: ' 3P18UCZkFJiFckC28c7ilP ',
      album: ' 1372 Overton Park ',
      name: ' Darken My Door ',
      plays:  364858 ,
      popularity:  26 ,
      rank:  57
    },
    {
      id: ' 4c24qIknMYfykm7Wjhi55h ',
      album: ' Rebels, Rogues & Sworn Brothers ',
      name: ' She\'s Just That Kind of Girl ',
      plays:  369376 ,
      popularity:  14 ,
      rank:  56
    },
    {
      id: ' 7s626BnoUj0YXaDCgxr4do ',
      album: ' Lucero ',
      name: ' Wandering Star ',
      plays:  380014 ,
      popularity:  14 ,
      rank:  55
    },
    {
      id: ' 2jkiaOFEMXs25HRfeH1etC ',
      album: ' All a Man Should Do ',
      name: ' Throwback No. 2 ',
      plays:  380359 ,
      popularity:  5 ,
      rank:  54
    },
    {
      id: ' 2GYEpVUb58Jty8DklkemiD ',
      album: ' Among the Ghosts ',
      name: ' Always Been You ',
      plays:  381393 ,
      popularity:  29 ,
      rank:  53
    },
    {
      id: ' 2dgMB06xH41WR9TR1C7MhU ',
      album: ' Live from Atlanta ',
      name: ' I Can Get Us Out of Here ',
      plays:  382736 ,
      popularity:  16 ,
      rank:  52
    },
    {
      id: ' 3SZXgKoBfTpIzxI0xZszAg ',
      album: ' All a Man Should Do ',
      name: ' My Girl & Me in \'93 ',
      plays:  388734 ,
      popularity:  6 ,
      rank:  51
    },
    {
      id: ' 5DUyOg4EF5PRsY7tarkQO1 ',
      album: ' Tennessee ',
      name: ' The Last Song ',
      plays:  389537 ,
      popularity:  24 ,
      rank:  50
    },
    {
      id: ' 3oKnVbDlZi1fxalOIsSqcb ',
      album: ' Lucero ',
      name: ' All Sewn Up ',
      plays:  392646 ,
      popularity:  14 ,
      rank:  49
    },
    {
      id: ' 3iMTGDTr3zoZkhS5A6ZJrc ',
      album: ' Rebels, Rogues & Sworn Brothers ',
      name: ' I Can Get Us Out of Here ',
      plays:  398885 ,
      popularity:  13 ,
      rank:  48
    },
    {
      id: ' 40YnceZfrhLPu9uvi9EF8e ',
      album: ' Tennessee ',
      name: ' Old Sad Songs ',
      plays:  404056 ,
      popularity:  24 ,
      rank:  47
    },
    {
      id: ' 5TF3CJToLzTyWN44miK0v0 ',
      album: ' Tennessee ',
      name: ' Fistful of Tears ',
      plays:  414866 ,
      popularity:  24 ,
      rank:  46
    },
    {
      id: ' 71gF5cgKujdNTTZnEAX35L ',
      album: ' Nobody\'s Darlings ',
      name: ' Anjalee ',
      plays:  421606 ,
      popularity:  13 ,
      rank:  45
    },
    {
      id: ' 3UJBdJEmjz0kurPtCiC4G5 ',
      album: ' Tennessee ',
      name: ' Here at the Starlite ',
      plays:  423674 ,
      popularity:  25 ,
      rank:  44
    },
    {
      id: ' 3joXN6RTIrpgEZw6JrvI8r ',
      album: ' Nobody\'s Darlings ',
      name: ' Hold Me Close ',
      plays:  424989 ,
      popularity:  13 ,
      rank:  43
    },
    {
      id: ' 1aSmNAL4QaQpFWoVxsW3Z1 ',
      album: ' 1372 Overton Park ',
      name: ' Smoke ',
      plays:  432684 ,
      popularity:  28 ,
      rank:  42
    },
    {
      id: ' 2wb5H1Q4aT64CHne4ZJlIm ',
      album: ' All a Man Should Do ',
      name: ' They Called Her Killer ',
      plays:  438329 ,
      popularity:  8 ,
      rank:  41
    },
    {
      id: ' 6jGH5pEW6UxoQg7aAZs0vo ',
      album: ' Nobody\'s Darlings ',
      name: ' Watch It Burn ',
      plays:  439490 ,
      popularity:  17 ,
      rank:  40
    },
    {
      id: ' 3HiTmNQMzRV4JCc7xU0n2t ',
      album: ' 1372 Overton Park ',
      name: ' Can\'t Feel A Thing ',
      plays:  452879 ,
      popularity:  28 ,
      rank:  39
    },
    {
      id: ' 3LBdrVjl3WF0SLkhUthLe8 ',
      album: ' Among the Ghosts ',
      name: ' Everything Has Changed ',
      plays:  468539 ,
      popularity:  33 ,
      rank:  38
    },
    {
      id: ' 4cUh8OU2mcc4O3bJUYPmPm ',
      album: ' Tennessee ',
      name: ' When You\'re Gone ',
      plays:  469848 ,
      popularity:  25 ,
      rank:  37
    },
    {
      id: ' 06r4CUeIK0uo0PqUn9UvU3 ',
      album: ' Rebels, Rogues & Sworn Brothers ',
      name: ' What Else Would You Have Me Be? ',
      plays:  477174 ,
      popularity:  16 ,
      rank:  36
    },
    {
      id: ' 19zdoQNS6wxi1bIw5ugy4j ',
      album: ' Among the Ghosts ',
      name: ' Bottom of the Sea ',
      plays:  477735 ,
      popularity:  31 ,
      rank:  35
    },
    {
      id: ' 5msQsaDruKhoE4CaIBwDye ',
      album: ' Nobody\'s Darlings ',
      name: ' All the Same to Me ',
      plays:  493174 ,
      popularity:  18 ,
      rank:  34
    },
    {
      id: ' 1erlQOi4VyE2EVqPDsbjgy ',
      album: ' That Much Further West ',
      name: ' That Much Further West ',
      plays:  493200 ,
      popularity:  29 ,
      rank:  33
    },
    {
      id: ' 0i391vo6ZRjNUe3bQ2n6yu ',
      album: ' All a Man Should Do ',
      name: ' I Woke Up in New Orleans ',
      plays:  502281 ,
      popularity:  8 ,
      rank:  32
    },
    {
      id: ' 5DHqLphJ84FFmwE7Jw1sHY ',
      album: ' 1372 Overton Park ',
      name: ' Mom ',
      plays:  508499 ,
      popularity:  25 ,
      rank:  31
    },
    {
      id: ' 7MEzKirbaU6IdJUVUviyPP ',
      album: ' Texas & Tennessee ',
      name: ' Union Pacific Line ',
      plays:  512327 ,
      popularity:  23 ,
      rank:  30
    },
    {
      id: ' 7HcEu61q1FTmYclukBpILg ',
      album: ' Nobody\'s Darlings ',
      name: ' Nobody\'s Darlings ',
      plays:  522626 ,
      popularity:  17 ,
      rank:  29
    },
    {
      id: ' 1NOeiUwkMoP6gqB48AzHOr ',
      album: ' Lucero ',
      name: ' A Dangerous Thing ',
      plays:  531333 ,
      popularity:  19 ,
      rank:  28
    },
    {
      id: ' 68Z5lxsh63aRFkkIt6p6ew ',
      album: ' Nobody\'s Darlings ',
      name: ' The War ',
      plays:  543376 ,
      popularity:  18 ,
      rank:  27
    },
    {
      id: ' 50H880bfXgzlVItJAN4VSP ',
      album: ' 1372 Overton Park ',
      name: ' Hey Darlin’ Do You Gamble? ',
      plays:  552597 ,
      popularity:  29 ,
      rank:  26
    },
    {
      id: ' 0GcgYAjpGfPJZ7WSOYAsil ',
      album: ' All a Man Should Do ',
      name: ' The Man I Was ',
      plays:  565713 ,
      popularity:  9 ,
      rank:  25
    },
    {
      id: ' 2KJbhUWsK2I2Hp5NvsByir ',
      album: ' 1372 Overton Park ',
      name: ' What Are You Willing To Lose ',
      plays:  576315 ,
      popularity:  30 ,
      rank:  24
    },
    {
      id: ' 3VfgIvQpeZnZjMURTMP4ZV ',
      album: ' Lucero ',
      name: ' It Gets The Worst At Night ',
      plays:  629596 ,
      popularity:  21 ,
      rank:  23
    },
    {
      id: ' 42eis5ipURArxsa0vBC4TU ',
      album: ' Tennessee ',
      name: ' I\'ll Just Fall ',
      plays:  653036 ,
      popularity:  32 ,
      rank:  22
    },
    {
      id: ' 1oD5gTH1hVkDkjNIShrFLS ',
      album: ' Tennessee ',
      name: ' Chain Link Fence ',
      plays:  659547 ,
      popularity:  30 ,
      rank:  21
    },
    {
      id: ' 2f2lAaOB8n45zENz2OlVm6 ',
      album: ' Nobody\'s Darlings ',
      name: ' Bikeriders ',
      plays:  674972 ,
      popularity:  20 ,
      rank:  20
    },
    {
      id: ' 07YfGq93xTJvDM4x2BMRkO ',
      album: ' Can\'t You Hear Them Howl? ',
      name: ' Can\'t You Hear Them Howl ',
      plays:  684970 ,
      popularity:  0 ,
      rank:  19
    },
    {
      id: ' 76hAVkT4N7rh5BEyUVRvOM ',
      album: ' Among the Ghosts ',
      name: ' Among the Ghosts ',
      plays:  755330 ,
      popularity:  37 ,
      rank:  18
    },
    {
      id: ' 6gY8DSzLkr0rOcMtk2Gem8 ',
      album: ' Lucero ',
      name: ' Raising Hell ',
      plays:  779528 ,
      popularity:  22 ,
      rank:  17
    },
    {
      id: ' 6VpqqgV3t5NNYUbAFeByPd ',
      album: ' Tennessee ',
      name: ' Ain\'t So Lonely ',
      plays:  786879 ,
      popularity:  31 ,
      rank:  16
    },
    {
      id: ' 32ZSFQARk2GDqq8v0u86bG ',
      album: ' Went Looking for Warren Zevon\'s Los Angeles ',
      name: ' Went Looking for Warren Zevon\'s Los Angeles ',
      plays:  808031 ,
      popularity:  0 ,
      rank:  15
    },
    {
      id: ' 51Wf90leTin0j052jLDJR8 ',
      album: ' Women & Work ',
      name: ' On My Way Downtown ',
      plays:  813597 ,
      popularity:  0 ,
      rank:  14
    },
    {
      id: ' 1Y788yJX1IuUxYwAwiV82W ',
      album: ' To My Dearest Wife ',
      name: ' To My Dearest Wife ',
      plays:  857849 ,
      popularity:  24 ,
      rank:  13
    },
    {
      id: ' 7oTIDuwS2EyxDLE2gvtIvk ',
      album: ' Lucero ',
      name: ' Little Silver Heart ',
      plays:  864360 ,
      popularity:  26 ,
      rank:  12
    },
    {
      id: ' 1RN9C5ltLnuy36uAZp99zo ',
      album: ' That Much Further West ',
      name: ' Tears Don\'t Matter Much ',
      plays:  899944 ,
      popularity:  32 ,
      rank:  11
    },
    {
      id: ' 24feDA6qoEFYYSw96W6WeJ ',
      album: ' The Attic Tapes ',
      name: ' Kiss the Bottle ',
      plays:  954924 ,
      popularity:  24 ,
      rank:  10
    },
    {
      id: ' 7yXgNXpPgXndRWIEuswkE8 ',
      album: ' Nobody\'s Darlings ',
      name: ' Sixteen ',
      plays:  1014764 ,
      popularity:  21 ,
      rank:  9
    },
    {
      id: ' 02uTyXg74hOCbfKB56NyPQ ',
      album: ' All a Man Should Do ',
      name: ' Baby Don\'t You Want Me ',
      plays:  1050705 ,
      popularity:  13 ,
      rank:  8
    },
    {
      id: ' 7KBIL2nSAhEJo5tL0B4p7f ',
      album: ' For the Lonely Ones ',
      name: ' For the Lonely Ones ',
      plays:  1241920 ,
      popularity:  14 ,
      rank:  7
    },
    {
      id: ' 3qaBzBQvN2ARR7ddNtnNs5 ',
      album: ' Tennessee ',
      name: ' Slow Dancing ',
      plays:  1561892 ,
      popularity:  35 ,
      rank:  6
    },
    {
      id: ' 6XhiJs0O2T4hJ49IStgvVR ',
      album: ' Texas & Tennessee ',
      name: ' Texas & Tennessee ',
      plays:  1765047 ,
      popularity:  37 ,
      rank:  5
    },
    {
      id: ' 25XGDQQTKE4ctaF1oSdiWJ ',
      album: ' Tennessee ',
      name: ' Sweet Little Thing ',
      plays:  2047322 ,
      popularity:  37 ,
      rank:  4
    },
    {
      id: ' 7kCjXmZAsF2BvNogxCOT4i ',
      album: ' Lucero ',
      name: ' Drink \'Till We\'re Gone ',
      plays:  2324526 ,
      popularity:  32 ,
      rank:  3
    },
    {
      id: ' 0SaWA4MzZl2ZNEP1kzbZNO ',
      album: ' Lucero ',
      name: ' My Best Girl ',
      plays:  2408419 ,
      popularity:  28 ,
      rank:  2
    },
    {
      id: ' 5W6mFdtLbNllkRh6Q07IbT ',
      album: ' Tennessee ',
      name: ' Nights Like These ',
      plays:  2913574 ,
      popularity:  42 ,
      rank:  1
    },
];

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private allSongs;
  private sampledSongs: Song[];
  private rank;


  constructor() {
    this.allSongs = allSongs;

   }

   compare( a, b ) {
     if (a.name < b.name) {
       return -1;
     }
     return 1;
   }

   getSongs() {
     this.rank = 1;
     this.sampledSongs = _.sample(this.allSongs, 10);
     return this.sampledSongs.sort(this.compare);
   }
}
