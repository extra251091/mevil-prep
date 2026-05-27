// ═══════════════════════════════════════════════════════
//  PART 1 — ICAS Maths & ICAS English
//  Victorian Curriculum Year 2 (VCAA) — Casey Fields PS
//  ICAS format: Maths = 30Q/60min, English = 35Q/65min
// ═══════════════════════════════════════════════════════
window.QB = window.QB || {};

// ─────────────────────────────────────────────────────
//  ICAS MATHEMATICS  (78 questions)
//  Covers: VCMNA073-082, VCMMG083-092, VCMSP093-095
// ─────────────────────────────────────────────────────
window.QB.icas_maths = [

// ── Place Value & Number Sense (VCMNA073-074) ──
{id:'m01',q:'What is the value of the digit 4 in the number 347?',o:['4','40','400','4000'],a:1,t:'Place Value',e:'In 347, the 4 is in the tens column. Tens value = 4 × 10 = 40.'},
{id:'m02',q:'Which number has 5 hundreds, 0 tens and 8 ones?',o:['580','508','058','850'],a:1,t:'Place Value',e:'5 hundreds = 500, 0 tens = 0, 8 ones = 8. Total = 508.'},
{id:'m03',q:'What is 600 + 70 + 3?',o:['6073','673','637','763'],a:1,t:'Place Value',e:'600 + 70 + 3 = 673.'},
{id:'m04',q:'Which digit is in the HUNDREDS place in 925?',o:['5','2','9','92'],a:2,t:'Place Value',e:'In 925: 9 is in the hundreds, 2 in the tens, 5 in the ones.'},
{id:'m05',q:'Order from smallest to largest: 406, 640, 460, 604',o:['406, 460, 604, 640','460, 406, 604, 640','640, 604, 460, 406','406, 604, 460, 640'],a:0,t:'Place Value',e:'Compare hundreds first: 4__ < 6__. Then 406 < 460 and 604 < 640.'},
{id:'m06',q:'What number comes just BEFORE 500?',o:['400','501','499','490'],a:2,t:'Place Value',e:'The number before 500 is 499.'},
{id:'m07',q:'How many TENS are in the number 380?',o:['3','8','38','380'],a:2,t:'Place Value',e:'380 = 38 tens and 0 ones. There are 38 tens.'},
{id:'m08',q:'Which number is the LARGEST?',o:['539','593','359','935'],a:3,t:'Place Value',e:'All start differently at hundreds: 935 has 9 hundreds — the most.'},
{id:'m09',q:'What is 900 + 60 + 1?',o:['916','961','691','169'],a:1,t:'Place Value',e:'900 + 60 + 1 = 961.'},
{id:'m10',q:'Sam writes a 3-digit number. It has 7 in the ones, 2 in the hundreds and 5 in the tens. What is the number?',o:['725','257','275','527'],a:2,t:'Place Value',e:'2 hundreds + 5 tens + 7 ones = 257. Wait: 2 hundreds = 200, 5 tens = 50, 7 ones = 7 → 257.'},

// ── Skip Counting & Number Patterns (VCMNA080) ──
{id:'m11',q:'Count by 5s. What number is missing? 35, 40, 45, ___, 55',o:['48','49','50','51'],a:2,t:'Number Patterns',e:'Counting by 5s: 35, 40, 45, 50, 55.'},
{id:'m12',q:'Count by 3s. What number comes next? 9, 12, 15, 18, ___',o:['19','20','21','22'],a:2,t:'Number Patterns',e:'Adding 3 each time: 18 + 3 = 21.'},
{id:'m13',q:'Count backwards by 10. What is missing? 100, 90, 80, ___, 60',o:['65','75','70','69'],a:2,t:'Number Patterns',e:'Counting back by 10: 80 − 10 = 70.'},
{id:'m14',q:'What is the rule for this pattern: 4, 8, 12, 16, 20?',o:['Add 2','Add 3','Add 4','Add 5'],a:2,t:'Number Patterns',e:'Each number increases by 4 (counting by fours).'},
{id:'m15',q:'Count by 2s starting from 1: 1, 3, 5, 7, ___',o:['8','9','10','11'],a:1,t:'Number Patterns',e:'Odd numbers: 1, 3, 5, 7, 9.'},
{id:'m16',q:'What is the MISSING number? 56, 63, 70, ___, 84',o:['74','75','77','78'],a:2,t:'Number Patterns',e:'Rule is +7: 70 + 7 = 77.'},
{id:'m17',q:'Which number is ODD?',o:['48','72','91','64'],a:2,t:'Number Patterns',e:'Odd numbers end in 1, 3, 5, 7 or 9. 91 ends in 1, so it is odd.'},
{id:'m18',q:'Count by 100s. What comes next? 300, 400, 500, ___',o:['550','600','510','700'],a:1,t:'Number Patterns',e:'Adding 100 each time: 500 + 100 = 600.'},

// ── Addition & Subtraction (VCMNA075-076) ──
{id:'m19',q:'What is 46 + 37?',o:['73','83','74','82'],a:1,t:'Addition',e:'46 + 37: Add tens (40+30=70), add ones (6+7=13). 70+13=83.'},
{id:'m20',q:'What is 85 − 28?',o:['47','57','63','67'],a:1,t:'Subtraction',e:'85 − 28: Take 30 away from 85 = 55, add 2 back = 57.'},
{id:'m21',q:'A tram has 54 passengers. At the next stop, 27 get off. How many are left?',o:['17','27','37','47'],a:1,t:'Subtraction',e:'54 − 27 = 27 passengers remain.'},
{id:'m22',q:'What is 63 + 29?',o:['82','90','92','93'],a:2,t:'Addition',e:'63 + 29: 63 + 30 = 93, then subtract 1 = 92.'},
{id:'m23',q:'What number makes this true? ___ + 45 = 100',o:['45','55','65','35'],a:1,t:'Addition',e:'100 − 45 = 55.'},
{id:'m24',q:'Ella scores 78 points. She needs 100 to win. How many more does she need?',o:['12','22','32','28'],a:1,t:'Subtraction',e:'100 − 78 = 22 points.'},
{id:'m25',q:'What is 130 + 65?',o:['185','195','205','175'],a:1,t:'Addition',e:'130 + 65: 100 + 60 = 160, 30 + 5 = 35. Total: 160 + 35 = 195.'},
{id:'m26',q:'A baker makes 156 rolls. He sells 79. How many are left?',o:['67','77','87','97'],a:1,t:'Subtraction',e:'156 − 79: 156 − 80 = 76, + 1 = 77.'},
{id:'m27',q:'What is 99 + 99?',o:['188','197','198','199'],a:2,t:'Addition',e:'99 + 99 = 100 + 100 − 2 = 198.'},
{id:'m28',q:'Which number sentence is TRUE?',o:['35 + 27 = 52','48 − 19 = 29','60 + 14 = 84','72 − 35 = 48'],a:1,t:'Subtraction',e:'48 − 19: 48 − 20 = 28, + 1 = 29. ✓'},
{id:'m29',q:'Mevil has 125 cards. He gives 48 away. How many does he keep?',o:['67','77','87','97'],a:1,t:'Subtraction',e:'125 − 48: 125 − 50 = 75, + 2 = 77.'},
{id:'m30',q:'What is double 38?',o:['66','76','76','78'],a:1,t:'Addition',e:'Double 38 = 38 + 38 = 76.'},
{id:'m31',q:'500 − 200 = ?',o:['200','300','400','700'],a:1,t:'Subtraction',e:'500 − 200 = 300.'},
{id:'m32',q:'34 + 56 + 10 = ?',o:['90','100','110','80'],a:1,t:'Addition',e:'34 + 56 = 90. 90 + 10 = 100.'},

// ── Multiplication & Division (VCMNA077-078) ──
{id:'m33',q:'There are 6 boxes with 4 crayons in each. How many crayons altogether?',o:['10','18','24','28'],a:2,t:'Multiplication',e:'6 groups of 4 = 6 × 4 = 24.'},
{id:'m34',q:'What is 5 × 7?',o:['25','30','35','40'],a:2,t:'Multiplication',e:'5 × 7 = 35.'},
{id:'m35',q:'An array has 3 rows and 8 columns. How many dots in total?',o:['11','18','24','28'],a:2,t:'Multiplication',e:'3 × 8 = 24.'},
{id:'m36',q:'27 students sit in 3 equal groups. How many in each group?',o:['7','8','9','10'],a:2,t:'Division',e:'27 ÷ 3 = 9.'},
{id:'m37',q:'Which number sentence matches "5 groups of 6"?',o:['5 + 6','5 × 6','6 ÷ 5','5 − 6'],a:1,t:'Multiplication',e:'Groups of means multiply: 5 × 6 = 30.'},
{id:'m38',q:'What is 40 ÷ 5?',o:['5','6','7','8'],a:3,t:'Division',e:'40 ÷ 5 = 8 (because 8 × 5 = 40).'},
{id:'m39',q:'24 apples are packed into bags of 4. How many bags?',o:['4','5','6','8'],a:2,t:'Division',e:'24 ÷ 4 = 6 bags.'},
{id:'m40',q:'What is 2 × 10?',o:['12','20','22','102'],a:1,t:'Multiplication',e:'2 × 10 = 20.'},
{id:'m41',q:'Which is the same as 3 + 3 + 3 + 3?',o:['3 × 3','4 × 3','3 + 4','3 × 4'],a:1,t:'Multiplication',e:'Adding 3 four times = 4 groups of 3 = 4 × 3.'},
{id:'m42',q:'30 ÷ 2 = ?',o:['10','12','15','16'],a:2,t:'Division',e:'30 ÷ 2 = 15.'},
{id:'m43',q:'A farmer has 36 eggs. He puts them equally into 4 cartons. How many eggs per carton?',o:['7','8','9','10'],a:2,t:'Division',e:'36 ÷ 4 = 9 eggs per carton.'},
{id:'m44',q:'What is 10 × 10?',o:['20','100','110','1000'],a:1,t:'Multiplication',e:'10 × 10 = 100.'},

// ── Fractions (VCMNA079) ──
{id:'m45',q:'A piece of string is 20 cm long. What is one quarter of its length?',o:['4 cm','5 cm','8 cm','10 cm'],a:1,t:'Fractions',e:'One quarter = 20 ÷ 4 = 5 cm.'},
{id:'m46',q:'A shape is divided into 8 equal parts. 3 parts are shaded. What fraction is shaded?',o:['3/4','1/3','3/8','1/8'],a:2,t:'Fractions',e:'3 out of 8 equal parts = three-eighths = 3/8.'},
{id:'m47',q:'Which is GREATER: one half or three quarters?',o:['One half','Three quarters','They are equal','Cannot tell'],a:1,t:'Fractions',e:'3/4 = 0.75 and 1/2 = 0.50. Three quarters is greater.'},
{id:'m48',q:'What is one half of 50?',o:['10','20','25','30'],a:2,t:'Fractions',e:'Half of 50 = 50 ÷ 2 = 25.'},
{id:'m49',q:'A pizza has 8 equal slices. Mia eats 2. What fraction is LEFT?',o:['2/8','6/8','3/8','4/8'],a:1,t:'Fractions',e:'8 − 2 = 6 slices left. 6 out of 8 = 6/8.'},
{id:'m50',q:'Which fraction equals one half?',o:['2/8','3/8','4/8','5/8'],a:2,t:'Fractions',e:'4/8 = 4 ÷ 8 = 0.5 = one half.'},
{id:'m51',q:'One quarter of 24 = ?',o:['4','6','8','12'],a:1,t:'Fractions',e:'24 ÷ 4 = 6.'},
{id:'m52',q:'Zoe ate 3/4 of her sandwich. What fraction is left to eat?',o:['1/2','1/3','1/4','2/4'],a:2,t:'Fractions',e:'If 3/4 is eaten, 1/4 remains.'},

// ── Money — Australian Currency (VCMNA082) ──
{id:'m53',q:'Levi buys a snack for $2.30 and pays with a $5 note. What is his change?',o:['$1.70','$2.70','$2.20','$3.70'],a:1,t:'Money',e:'$5.00 − $2.30 = $2.70.'},
{id:'m54',q:'How many 20-cent coins make up $2.00?',o:['5','8','10','20'],a:2,t:'Money',e:'$2.00 ÷ $0.20 = 10 coins.'},
{id:'m55',q:'Which set of coins makes $1.75?',o:['$1 + 50c + 20c + 5c','$1 + 50c + 25c','2 × 50c + 75c','50c + 50c + 50c + 25c'],a:0,t:'Money',e:'$1 + 50c + 20c + 5c = $1.00 + $0.50 + $0.20 + $0.05 = $1.75.'},
{id:'m56',q:'A book costs $4.55 and a pen costs $1.45. What is the total?',o:['$5.00','$5.55','$6.00','$6.10'],a:2,t:'Money',e:'$4.55 + $1.45 = $6.00.'},
{id:'m57',q:'Emma saves $3.50 each week for 4 weeks. How much does she save in total?',o:['$12.00','$13.50','$14.00','$15.00'],a:2,t:'Money',e:'$3.50 × 4 = $14.00.'},
{id:'m58',q:'Which note has the LEAST value?',o:['$20 note','$50 note','$5 note','$10 note'],a:2,t:'Money',e:'The $5 note is the smallest Australian note.'},
{id:'m59',q:'A toy costs $6.80. James pays with a $10 note. How much change does he get?',o:['$2.80','$3.20','$3.80','$4.20'],a:1,t:'Money',e:'$10.00 − $6.80 = $3.20.'},

// ── Measurement: Length, Mass, Capacity (VCMMG083-084) ──
{id:'m60',q:'A worm is 8 cm long and a lizard is 23 cm long. How much longer is the lizard?',o:['13 cm','15 cm','17 cm','31 cm'],a:1,t:'Measurement',e:'23 − 8 = 15 cm longer.'},
{id:'m61',q:'Which unit is BEST for measuring the length of a football oval?',o:['mm','cm','m','km'],a:2,t:'Measurement',e:'A football oval is measured in metres (m) — about 165 m long.'},
{id:'m62',q:'A bucket holds 8 litres. A cup holds 250 mL. How many cups fill the bucket?',o:['16','24','32','40'],a:2,t:'Measurement',e:'8 litres = 8000 mL. 8000 ÷ 250 = 32 cups.'},
{id:'m63',q:'Two parcels: one is 3 kg, the other is 850 g. Which is HEAVIER?',o:['850 g parcel','3 kg parcel','They weigh the same','Cannot tell'],a:1,t:'Measurement',e:'3 kg = 3000 g, which is much more than 850 g.'},
{id:'m64',q:'If 1 metre = 100 cm, how many cm are in 2.5 metres?',o:['205 cm','250 cm','25 cm','2500 cm'],a:1,t:'Measurement',e:'2.5 × 100 = 250 cm.'},

// ── Measurement: Time & Calendar (VCMMG085-087) ──
{id:'m65',q:'What time does a clock show when the big hand points to 3 and the small hand points to 7?',o:['7:03','7:15','3:07','3:35'],a:1,t:'Time',e:'Big hand at 3 = quarter past. Small hand at 7 = 7 o\'clock. So: quarter past 7 = 7:15.'},
{id:'m66',q:'School starts at 8:45 am and finishes at 3:15 pm. How long is the school day?',o:['5 hours 30 min','6 hours 30 min','6 hours','7 hours'],a:1,t:'Time',e:'8:45 to 3:15 = 6 hours and 30 minutes.'},
{id:'m67',q:'Which season is it in Melbourne in JULY?',o:['Summer','Autumn','Winter','Spring'],a:2,t:'Time',e:'Melbourne seasons: Winter = June, July, August.'},
{id:'m68',q:'Which month comes AFTER September?',o:['August','November','October','December'],a:2,t:'Time',e:'The order is: ...August, September, October, November...'},
{id:'m69',q:'A movie is 1 hour and 45 minutes long. It starts at 2:15 pm. When does it end?',o:['3:45 pm','4:00 pm','4:15 pm','3:30 pm'],a:1,t:'Time',e:'2:15 + 1 hour = 3:15, then + 45 min = 4:00 pm.'},
{id:'m70',q:'How many days are in the month of March?',o:['28','29','30','31'],a:3,t:'Time',e:'March has 31 days (remember: 30 days hath September, April, June and November — the rest have 31).'},
{id:'m71',q:'The 1st of June is a Wednesday. What day is the 8th of June?',o:['Tuesday','Wednesday','Thursday','Friday'],a:1,t:'Time',e:'Same day one week later: 1st + 7 days = 8th, which is also Wednesday.'},

// ── Geometry: 2D Shapes & 3D Objects (VCMMG088-089) ──
{id:'m72',q:'How many sides does a pentagon have?',o:['4','5','6','8'],a:1,t:'Geometry',e:'A pentagon has 5 sides. Penta = five.'},
{id:'m73',q:'Which 3D shape has exactly 2 circular faces and 1 curved surface?',o:['Cone','Sphere','Cube','Cylinder'],a:3,t:'Geometry',e:'A cylinder has 2 circular flat faces and 1 curved surface — like a can.'},
{id:'m74',q:'A cube has how many faces?',o:['4','5','6','8'],a:2,t:'Geometry',e:'A cube has 6 square faces.'},
{id:'m75',q:'Which shape has ONLY 1 line of symmetry?',o:['Square','Rectangle (not square)','Equilateral triangle','Isosceles triangle'],a:3,t:'Geometry',e:'An isosceles triangle (2 equal sides) has 1 line of symmetry down the middle.'},
{id:'m76',q:'What is the name of a shape with 8 sides?',o:['Hexagon','Heptagon','Octagon','Nonagon'],a:2,t:'Geometry',e:'Octo = eight. An octagon has 8 sides.'},
{id:'m77',q:'Liam turns a quarter turn clockwise. He was facing North. Now he faces:',o:['South','East','West','North-East'],a:1,t:'Geometry',e:'A quarter turn clockwise from North → East.'},

// ── Data & Probability (VCMSP093-095) ──
{id:'m78',q:'A class of 24 voted for their favourite sport. 8 chose football, 10 chose swimming, 6 chose cricket. How many MORE chose swimming than cricket?',o:['2','4','6','8'],a:1,t:'Data',e:'10 − 6 = 4 more students chose swimming.'},
{id:'m79',q:'A bag has 5 red balls and 1 blue ball. Which outcome is MOST LIKELY when one ball is pulled out?',o:['Blue ball','Red ball','Either is equally likely','Neither is likely'],a:1,t:'Probability',e:'There are 5 red and only 1 blue, so red is far more likely.'},
{id:'m80',q:'In a pictograph, each symbol = 4 students. There are 3 symbols next to "dogs". How many students chose dogs?',o:['3','7','12','16'],a:2,t:'Data',e:'3 symbols × 4 students each = 12 students.'},
{id:'m81',q:'Which event is IMPOSSIBLE?',o:['Rolling a 6 on a dice','It raining in Melbourne in winter','A Year 2 student lifting a car','Choosing a red card from a deck'],a:2,t:'Probability',e:'A Year 2 student cannot physically lift a car — this is impossible.'},

// ── Number Sentences & Problem Solving (VCMNA081) ──
{id:'m82',q:'Which number sentence solves: "Tom has 35 cards. He gets some more and now has 60. How many did he get?"',o:['35 + 60 = □','60 − □ = 35','35 + □ = 60','□ − 35 = 60'],a:2,t:'Problem Solving',e:'35 + □ = 60. So □ = 60 − 35 = 25.'},
{id:'m83',q:'There are 4 tables with 6 students each. Which number sentence finds the total?',o:['4 + 6 = □','4 × 6 = □','6 − 4 = □','6 ÷ 4 = □'],a:1,t:'Problem Solving',e:'Groups of = multiply: 4 × 6 = 24.'},
{id:'m84',q:'A jar has 48 lollies. They are shared equally between 8 children. Which sentence finds how many each child gets?',o:['48 × 8 = □','48 + 8 = □','48 − 8 = □','48 ÷ 8 = □'],a:3,t:'Problem Solving',e:'Sharing equally = divide: 48 ÷ 8 = 6 each.'},
{id:'m85',q:'What number makes this TRUE? 7 × □ = 56',o:['6','7','8','9'],a:2,t:'Problem Solving',e:'7 × 8 = 56. The missing number is 8.'},
{id:'m86',q:'Mevil reads 15 pages on Monday, 23 pages on Tuesday and 12 pages on Wednesday. How many pages in total?',o:['40','48','50','55'],a:2,t:'Problem Solving',e:'15 + 23 = 38, then 38 + 12 = 50 pages.'},

// ── Mixed Review ──
{id:'m87',q:'What is 1000 − 1?',o:['990','998','999','1001'],a:2,t:'Place Value',e:'1000 − 1 = 999.'},
{id:'m88',q:'Which pair of numbers has a SUM of 100?',o:['43 and 67','55 and 55','38 and 72','47 and 53'],a:3,t:'Addition',e:'47 + 53 = 100. ✓'},
{id:'m89',q:'How many centimetres in 1 metre?',o:['10','100','1000','10000'],a:1,t:'Measurement',e:'1 metre = 100 centimetres.'},
{id:'m90',q:'A rectangle has a length of 9 cm and a width of 4 cm. What is its perimeter?',o:['13 cm','26 cm','36 cm','18 cm'],a:1,t:'Geometry',e:'Perimeter = 2 × (9 + 4) = 2 × 13 = 26 cm.'},
{id:'m91',q:'Which fraction is SMALLEST?',o:['1/2','3/4','1/8','1/4'],a:2,t:'Fractions',e:'1/8 means 1 part out of 8 — the smallest piece when sharing equally.'},
{id:'m92',q:'What is 3 × 5 × 2?',o:['15','25','30','10'],a:2,t:'Multiplication',e:'3 × 5 = 15, then 15 × 2 = 30.'},
];

// ─────────────────────────────────────────────────────
//  ICAS ENGLISH  (77 questions)
//  Covers: VCELY242-243, VCELA244-248, VCELT249
//  5 reading passages + grammar, punctuation, spelling, vocab
// ─────────────────────────────────────────────────────
window.QB.icas_english = [

// ════════════════════════════════════════
//  READING COMPREHENSION — 5 PASSAGES
// ════════════════════════════════════════

// ── PASSAGE A: The Platypus (Australian context) ──
{id:'e01',p:'The platypus is one of Australia\'s most unusual animals. It has a duck-like bill, webbed feet and a beaver-like tail. Unlike most mammals, the female platypus lays eggs instead of giving birth to live young. After the eggs hatch, the mother feeds her babies with milk. Platypuses are found in freshwater rivers and streams in eastern Australia, including in Victoria.',q:'According to the passage, where do platypuses live?',o:['In the ocean','In freshwater rivers and streams','In dry desert areas','In tall gum trees'],a:1,t:'Comprehension',e:'The passage says: "Platypuses are found in freshwater rivers and streams."'},
{id:'e02',p:'The platypus is one of Australia\'s most unusual animals. It has a duck-like bill, webbed feet and a beaver-like tail. Unlike most mammals, the female platypus lays eggs instead of giving birth to live young. After the eggs hatch, the mother feeds her babies with milk. Platypuses are found in freshwater rivers and streams in eastern Australia, including in Victoria.',q:'What makes the platypus UNUSUAL compared to most mammals?',o:['It has webbed feet','It lives in water','It lays eggs','It eats fish'],a:2,t:'Comprehension',e:'Most mammals give birth to live young. The platypus is unusual because it lays eggs.'},
{id:'e03',p:'The platypus is one of Australia\'s most unusual animals. It has a duck-like bill, webbed feet and a beaver-like tail. Unlike most mammals, the female platypus lays eggs instead of giving birth to live young. After the eggs hatch, the mother feeds her babies with milk. Platypuses are found in freshwater rivers and streams in eastern Australia, including in Victoria.',q:'In the passage, the word "unusual" means:',o:['Common and boring','Dangerous and scary','Not normal or very different','Small and cute'],a:2,t:'Vocabulary in Context',e:'"Unusual" means not normal — different from what most people expect.'},
{id:'e04',p:'The platypus is one of Australia\'s most unusual animals. It has a duck-like bill, webbed feet and a beaver-like tail. Unlike most mammals, the female platypus lays eggs instead of giving birth to live young. After the eggs hatch, the mother feeds her babies with milk. Platypuses are found in freshwater rivers and streams in eastern Australia, including in Victoria.',q:'How does the mother platypus feed her babies after they hatch?',o:['With fish','With insects','With milk','With plants'],a:2,t:'Comprehension',e:'The passage says: "the mother feeds her babies with milk."'},

// ── PASSAGE B: Melbourne Weather ──
{id:'e05',p:'Melbourne is famous for having four seasons in one day. In the morning it might be cold and cloudy, but by afternoon it can be warm and sunny. Then a cool change may bring wind and rain by evening. This happens because Melbourne is located near Port Phillip Bay and the Great Dividing Range. Locals say: "If you don\'t like the weather, wait five minutes!"',q:'Why does Melbourne have such changeable weather, according to the passage?',o:['It is near the equator','It is located near Port Phillip Bay and the Great Dividing Range','It is the capital of Australia','It rarely rains in Melbourne'],a:1,t:'Comprehension',e:'The passage says Melbourne\'s location near Port Phillip Bay and the Great Dividing Range causes its changeable weather.'},
{id:'e06',p:'Melbourne is famous for having four seasons in one day. In the morning it might be cold and cloudy, but by afternoon it can be warm and sunny. Then a cool change may bring wind and rain by evening. This happens because Melbourne is located near Port Phillip Bay and the Great Dividing Range. Locals say: "If you don\'t like the weather, wait five minutes!"',q:'What does "If you don\'t like the weather, wait five minutes!" suggest?',o:['Melbourne weather never changes','Melbourne weather changes very quickly','Melbourne is very hot','Melbourne gets a lot of rain'],a:1,t:'Comprehension',e:'It means the weather changes so fast that in just five minutes it might be different.'},
{id:'e07',p:'Melbourne is famous for having four seasons in one day. In the morning it might be cold and cloudy, but by afternoon it can be warm and sunny. Then a cool change may bring wind and rain by evening. This happens because Melbourne is located near Port Phillip Bay and the Great Dividing Range. Locals say: "If you don\'t like the weather, wait five minutes!"',q:'The word "changeable" in this passage means:',o:['Always the same','Changing often','Very cold','Very hot'],a:1,t:'Vocabulary in Context',e:'"Changeable" means that something changes often — like Melbourne\'s weather.'},

// ── PASSAGE C: Anzac Day (Australian culture) ──
{id:'e08',p:'Every year on the 25th of April, Australians and New Zealanders remember the soldiers who fought for their country. This day is called Anzac Day. The name ANZAC stands for Australian and New Zealand Army Corps. Many people attend dawn services at memorials. Others watch marches through the city. Anzac biscuits are a popular treat made to remember the occasion.',q:'When is Anzac Day?',o:['25 April','25 March','25 June','1 January'],a:0,t:'Comprehension',e:'The passage clearly states: "Every year on the 25th of April."'},
{id:'e09',p:'Every year on the 25th of April, Australians and New Zealanders remember the soldiers who fought for their country. This day is called Anzac Day. The name ANZAC stands for Australian and New Zealand Army Corps. Many people attend dawn services at memorials. Others watch marches through the city. Anzac biscuits are a popular treat made to remember the occasion.',q:'What does ANZAC stand for?',o:['Australian National Zoological and Conservation','Australian and New Zealand Army Corps','Armed National Zealand and Australian Commandos','Australian Navy Zone Area Corps'],a:1,t:'Comprehension',e:'The passage tells us: "The name ANZAC stands for Australian and New Zealand Army Corps."'},
{id:'e10',p:'Every year on the 25th of April, Australians and New Zealanders remember the soldiers who fought for their country. This day is called Anzac Day. The name ANZAC stands for Australian and New Zealand Army Corps. Many people attend dawn services at memorials. Others watch marches through the city. Anzac biscuits are a popular treat made to remember the occasion.',q:'The word "memorials" in the passage refers to:',o:['Schools and libraries','Special places built to remember people or events','Shops where biscuits are sold','Parks where children play'],a:1,t:'Vocabulary in Context',e:'A memorial is a place or monument built to remember and honour people or events.'},

// ── PASSAGE D: A Day at the Beach ──
{id:'e11',p:'Last summer, Zara\'s family drove to Phillip Island for the day. The sea was bright blue and the sand was soft and warm. Zara built a sandcastle and her little brother Kai looked for crabs under the rocks. In the evening, they watched hundreds of little penguins waddle up the beach from the sea. It was the best day of the holidays.',q:'Where did Zara\'s family go for the day?',o:['Bondi Beach','St Kilda Beach','Phillip Island','The Dandenong Ranges'],a:2,t:'Comprehension',e:'The passage says: "Zara\'s family drove to Phillip Island for the day."'},
{id:'e12',p:'Last summer, Zara\'s family drove to Phillip Island for the day. The sea was bright blue and the sand was soft and warm. Zara built a sandcastle and her little brother Kai looked for crabs under the rocks. In the evening, they watched hundreds of little penguins waddle up the beach from the sea. It was the best day of the holidays.',q:'What did Kai do at the beach?',o:['Built a sandcastle','Swam in the sea','Looked for crabs under the rocks','Watched the penguins walk'],a:2,t:'Comprehension',e:'The passage says: "her little brother Kai looked for crabs under the rocks."'},
{id:'e13',p:'Last summer, Zara\'s family drove to Phillip Island for the day. The sea was bright blue and the sand was soft and warm. Zara built a sandcastle and her little brother Kai looked for crabs under the rocks. In the evening, they watched hundreds of little penguins waddle up the beach from the sea. It was the best day of the holidays.',q:'In the passage, the word "waddle" most likely means:',o:['Run fast','Swim quickly','Walk in a funny swaying way','Jump over rocks'],a:2,t:'Vocabulary in Context',e:'Penguins "waddle" — they walk with a swaying side-to-side movement because of their short legs.'},
{id:'e14',p:'Last summer, Zara\'s family drove to Phillip Island for the day. The sea was bright blue and the sand was soft and warm. Zara built a sandcastle and her little brother Kai looked for crabs under the rocks. In the evening, they watched hundreds of little penguins waddle up the beach from the sea. It was the best day of the holidays.',q:'How does Zara feel about the day, based on the passage?',o:['Bored and tired','Frightened','Very happy and excited','Sad that it ended'],a:2,t:'Comprehension',e:'The last sentence says: "It was the best day of the holidays." This shows she was very happy.'},

// ── PASSAGE E: How Bees Make Honey (Non-fiction) ──
{id:'e15',p:'Bees collect nectar from flowers by sucking it up with their tongues. They carry the nectar back to their hive in a special stomach called a honey stomach. Inside the hive, worker bees chew the nectar and add special substances to it. Then they spread it into cells made of beeswax and fan it with their wings to dry it out. When the honey is ready, they seal the cells with wax.',q:'How do bees collect nectar from flowers?',o:['With their feet','By chewing the petals','By sucking it up with their tongues','With their wings'],a:2,t:'Comprehension',e:'The passage says bees collect nectar "by sucking it up with their tongues."'},
{id:'e16',p:'Bees collect nectar from flowers by sucking it up with their tongues. They carry the nectar back to their hive in a special stomach called a honey stomach. Inside the hive, worker bees chew the nectar and add special substances to it. Then they spread it into cells made of beeswax and fan it with their wings to dry it out. When the honey is ready, they seal the cells with wax.',q:'What is the MAIN PURPOSE of this passage?',o:['To tell a story about a bee','To explain how bees make honey','To describe what a beehive looks like','To warn people about bee stings'],a:1,t:'Comprehension',e:'The whole passage explains the process of how bees make honey — it is informative (non-fiction).'},
{id:'e17',p:'Bees collect nectar from flowers by sucking it up with their tongues. They carry the nectar back to their hive in a special stomach called a honey stomach. Inside the hive, worker bees chew the nectar and add special substances to it. Then they spread it into cells made of beeswax and fan it with their wings to dry it out. When the honey is ready, they seal the cells with wax.',q:'Why do bees fan the honey with their wings?',o:['To keep themselves cool','To make music','To dry out the nectar and help it become honey','To signal other bees'],a:2,t:'Comprehension',e:'The passage says they fan it "to dry it out" — this removes moisture and turns nectar into honey.'},

// ════════════════════════════════════════
//  GRAMMAR — WORD CLASSES (VCELA244)
// ════════════════════════════════════════

// ── Nouns ──
{id:'e18',q:'Which word is a PROPER NOUN?',o:['river','dog','Melbourne','building'],a:2,t:'Nouns',e:'Proper nouns name a specific person, place or thing and always start with a capital letter. Melbourne is a city name.'},
{id:'e19',q:'Which sentence contains a COLLECTIVE NOUN?',o:['The dog ran fast.','A flock of birds flew over the school.','She was very happy.','He ate his lunch quickly.'],a:1,t:'Nouns',e:'A collective noun names a group. "A flock of birds" uses the collective noun "flock."'},
{id:'e20',q:'Which word is an ABSTRACT NOUN (a feeling or idea)?',o:['table','happiness','tree','river'],a:1,t:'Nouns',e:'Abstract nouns are things you cannot touch. Happiness is a feeling, not a physical object.'},
{id:'e21',q:'What is the correct PLURAL of "leaf"?',o:['leafs','leafes','leaves','leavs'],a:2,t:'Nouns',e:'For words ending in -f, change the f to v and add -es: leaf → leaves.'},
{id:'e22',q:'What is the correct PLURAL of "child"?',o:['childs','childes','childrens','children'],a:3,t:'Nouns',e:'"Children" is the irregular plural of "child."'},

// ── Pronouns ──
{id:'e23',q:'Which word can replace "the teacher" in: "The teacher marked our books."?',o:['They','She','It','He'],a:1,t:'Pronouns',e:'If the teacher is female, we use "she." She marked our books. (Note: He also works for a male teacher — She is the most specific answer here.)'},
{id:'e24',q:'Choose the correct pronoun: "___ and I went to the park."',o:['Her','Him','Them','She'],a:3,t:'Pronouns',e:'Use subject pronouns before the verb: "She and I" is correct. Test by removing "and I" — "She went" works; "Her went" does not.'},

// ── Verbs ──
{id:'e25',q:'Which word is a VERB?',o:['enormous','quietly','giggled','happiness'],a:2,t:'Verbs',e:'A verb is an action or doing word. "Giggled" is what someone did — it is a verb.'},
{id:'e26',q:'Which sentence is in PAST TENSE?',o:['She will sing a song.','The dog is barking.','The children played in the rain.','We are going to school.'],a:2,t:'Verbs',e:'"Played" is past tense — the action already happened.'},
{id:'e27',q:'What is the correct PAST TENSE of "run"?',o:['runned','runned','ranned','ran'],a:3,t:'Verbs',e:'"Run" has an irregular past tense: ran. You cannot say "runned."'},
{id:'e28',q:'Choose the correct verb form: "The kookaburra ___ loudly every morning."',o:['laugh','laughs','laughed','laughing'],a:1,t:'Verbs',e:'For he/she/it in present tense, add -s: "The kookaburra laughs."'},
{id:'e29',q:'Which sentence is in FUTURE TENSE?',o:['She ran to school.','He is eating his lunch.','They will visit the zoo next week.','We played cricket.'],a:2,t:'Verbs',e:'"Will visit" shows future tense — something that has not happened yet.'},

// ── Adjectives ──
{id:'e30',q:'Choose the word that is an ADJECTIVE in this sentence: "The tiny wombat hid under a hollow log."',o:['wombat','hid','tiny','log'],a:2,t:'Adjectives',e:'"Tiny" is an adjective — it describes the wombat.'},
{id:'e31',q:'Which sentence uses the COMPARATIVE form of an adjective correctly?',o:['This koala is more cuter than that one.','This koala is the cutest.','This koala is cuter than that one.','This koala is most cute.'],a:2,t:'Adjectives',e:'For short adjectives, add -er for comparative: cuter. Do NOT say "more cuter."'},
{id:'e32',q:'Add the BEST adjective: "The ___ eagle soared above the Dandenong Ranges."',o:['red','wedge-tailed','small','sleeping'],a:1,t:'Adjectives',e:'"Wedge-tailed" is a specific, descriptive adjective. It also refers to Australia\'s famous wedge-tailed eagle!'},

// ── Adverbs ──
{id:'e33',q:'Which word is an ADVERB in: "The kangaroo hopped swiftly across the field."?',o:['kangaroo','hopped','swiftly','field'],a:2,t:'Adverbs',e:'"Swiftly" is an adverb — it tells us HOW the kangaroo hopped.'},
{id:'e34',q:'Which sentence uses an adverb of TIME?',o:['She ran quickly.','He sang beautifully.','They will leave tomorrow.','She spoke softly.'],a:2,t:'Adverbs',e:'"Tomorrow" is an adverb of time — it tells WHEN they will leave.'},

// ── Conjunctions ──
{id:'e35',q:'Choose the correct conjunction: "I wanted to go to the beach, ___ it was raining."',o:['and','so','but','or'],a:2,t:'Conjunctions',e:'"But" shows a contrast — I wanted to go, but there was a problem (rain).'},
{id:'e36',q:'Which conjunction shows a REASON?',o:['and','but','because','or'],a:2,t:'Conjunctions',e:'"Because" explains why: "I wore a jumper because it was cold."'},

// ════════════════════════════════════════
//  PUNCTUATION (VCELA246)
// ════════════════════════════════════════
{id:'e37',q:'Which sentence uses an APOSTROPHE correctly?',o:["The cats toy was lost.","The cat's toy was lost.","The cats' toys was lost.","Th'e cats toy was lost."],a:1,t:'Punctuation',e:'"Cat\'s toy" — the apostrophe + s shows the toy belongs to the cat (possession).'},
{id:'e38',q:'Where does the COMMA go in this list? "For the picnic we packed sandwiches fruit juice and biscuits."',o:['sandwiches, fruit juice, and biscuits','sandwiches fruit, juice and, biscuits','sandwiches, fruit, juice and biscuits','sandwiches fruit juice, and biscuits'],a:2,t:'Punctuation',e:'Commas separate items in a list. Use them after each item except (optionally) before "and."'},
{id:'e39',q:'Which sentence is punctuated CORRECTLY?',o:['Do you like AFL football.','Do you like AFL football!','Do you like AFL football?','do you like AFL football?'],a:2,t:'Punctuation',e:'A question must end with a question mark (?) and start with a capital letter.'},
{id:'e40',q:'The sentence "Its raining in Melbourne today" is missing:',o:['A full stop','A capital letter for Melbourne','An apostrophe: It\'s = It is','A comma after raining'],a:2,t:'Punctuation',e:'"It\'s" is a contraction of "it is." The apostrophe replaces the missing letter i.'},
{id:'e41',q:'Which uses SPEECH MARKS correctly?',o:['"She shouted, Jump!" he said.','She said, "Jump in the lake!"','She said "jump" in the lake.','She "said" jump in the lake.'],a:1,t:'Punctuation',e:'Speech marks go around the exact words spoken. The said/shouted tag goes outside.'},
{id:'e42',q:'Which sentence needs an EXCLAMATION MARK?',o:['What is your name','The dog is sleeping','Watch out for the snake','She walked to school'],a:2,t:'Punctuation',e:'"Watch out for the snake!" expresses urgency/strong feeling — it needs an exclamation mark.'},
{id:'e43',q:'Which sentence has CORRECT capitalisation?',o:['we celebrate australia day in January.','We celebrate Australia Day in January.','we celebrate Australia day in january.','We Celebrate Australia Day In January.'],a:1,t:'Punctuation',e:'Sentences start with a capital letter. Proper nouns (Australia Day, January) are also capitalised.'},

// ════════════════════════════════════════
//  SPELLING (VCELA247)
// ════════════════════════════════════════
{id:'e44',q:'Choose the CORRECT spelling:',o:['freind','frend','friend','freiend'],a:2,t:'Spelling',e:'Remember: "i before e except after c" — friend.'},
{id:'e45',q:'Choose the CORRECT spelling:',o:['beacuse','because','becuase','becouse'],a:1,t:'Spelling',e:'The correct spelling is b-e-c-a-u-s-e.'},
{id:'e46',q:'Which word is spelled INCORRECTLY?',o:['February','Wensday','Thursday','September'],a:1,t:'Spelling',e:'"Wensday" is wrong — the correct spelling is Wednesday (there is a silent "d").'},
{id:'e47',q:'Choose the CORRECT spelling:',o:['beautifull','beutiful','beautiful','beautyful'],a:2,t:'Spelling',e:'Beautiful: b-e-a-u-t-i-f-u-l. One "l" at the end.'},
{id:'e48',q:'Which word has a SILENT letter?',o:['jump','clock','knight','ball'],a:2,t:'Spelling',e:'"Knight" — the k is silent. We say /nait/.'},
{id:'e49',q:'Choose the correct HOMOPHONE: "She wore a ___ dress to the party."',o:['blew','blue','bloo','bluw'],a:1,t:'Spelling',e:'"Blue" is the colour. "Blew" means wind blew (past tense of blow).'},
{id:'e50',q:'Which word means "more than one foot" and is spelled correctly?',o:['foots','feets','feet','footes'],a:2,t:'Spelling',e:'"Feet" is the irregular plural of "foot."'},
{id:'e51',q:'Add -ing to "run". Which is correct?',o:['runing','running','runnning','runeing'],a:1,t:'Spelling',e:'When a short word ends in one vowel + one consonant, double the consonant: run → running.'},
{id:'e52',q:'Choose the correct spelling of the word meaning "to look at with your eyes":',o:['wach','waatch','watch','watche'],a:2,t:'Spelling',e:'The correct spelling is watch.'},

// ════════════════════════════════════════
//  VOCABULARY (VCELA248)
// ════════════════════════════════════════
{id:'e53',q:'What does the word "exhausted" mean?',o:['Very angry','Extremely happy','Very hungry','Extremely tired'],a:3,t:'Vocabulary',e:'"Exhausted" means extremely tired — as if all your energy is used up.'},
{id:'e54',q:'Which word is a SYNONYM (same meaning) for "enormous"?',o:['tiny','gigantic','quick','beautiful'],a:1,t:'Vocabulary',e:'Enormous and gigantic both mean very, very large.'},
{id:'e55',q:'Which word is an ANTONYM (opposite) of "ancient"?',o:['old','historic','modern','large'],a:2,t:'Vocabulary',e:'"Ancient" means very old. Its opposite is "modern" — new and current.'},
{id:'e56',q:'The prefix "un-" changes the meaning. What does "unhappy" mean?',o:['Very happy','Not happy','A little happy','Happy again'],a:1,t:'Vocabulary',e:'"Un-" means not. Unhappy = not happy.'},
{id:'e57',q:'The suffix "-ful" as in "careful" means:',o:['Without','Full of','Again','Not'],a:1,t:'Vocabulary',e:'"-ful" means full of. Careful = full of care. Hopeful = full of hope.'},
{id:'e58',q:'What does "fierce" mean?',o:['Very gentle and kind','Very violent, strong or angry','Very slow and quiet','Very small and thin'],a:1,t:'Vocabulary',e:'"Fierce" means very intense, violent or aggressive — like a fierce storm or a fierce lion.'},
{id:'e59',q:'Which word BEST completes the sentence? "The koala ___ in the fork of a gum tree."',o:['galloped','slithered','perched','splashed'],a:2,t:'Vocabulary',e:'"Perched" means rested or sat in a high place — suitable for an animal in a tree.'},

// ════════════════════════════════════════
//  SENTENCE STRUCTURE (VCELA245)
// ════════════════════════════════════════
{id:'e60',q:'Which of these is a COMPLETE sentence?',o:['The big brown.','Running very fast down the hill.','The kookaburra laughed loudly at dawn.','In the middle of the night.'],a:2,t:'Sentences',e:'A complete sentence needs a subject (kookaburra) and a verb (laughed).'},
{id:'e61',q:'Combine these two sentences using a conjunction: "I love footy. My sister loves netball."',o:['I love footy but my sister loves netball.','I love footy, however my sister loves netball also.','I love footy. And my sister loves netball.','I love footy therefore my sister loves netball.'],a:0,t:'Sentences',e:'"But" joins two contrasting ideas into one sentence correctly.'},
{id:'e62',q:'Which sentence is compound (two ideas joined with a conjunction)?',o:['The kangaroo hopped quickly.','It was raining so we stayed inside.','Running in the playground is fun.','After school, Mevil plays football.'],a:1,t:'Sentences',e:'A compound sentence joins two independent clauses: "It was raining" + "so" + "we stayed inside."'},
{id:'e63',q:'Which word class is "gently" in "She gently patted the puppy"?',o:['Noun','Verb','Adjective','Adverb'],a:3,t:'Sentences',e:'"Gently" describes HOW she patted — it is an adverb.'},

// ════════════════════════════════════════
//  TEXT TYPES (VCELT249)
// ════════════════════════════════════════
{id:'e64',q:'A text that gives step-by-step instructions (like a recipe) is called a:',o:['Narrative','Persuasive text','Procedure','Report'],a:2,t:'Text Types',e:'A procedure text gives instructions — steps to follow in order to complete a task.'},
{id:'e65',q:'Which feature would you find in a NON-FICTION book about the Dandenong Ranges?',o:['Imaginary characters','An index, headings and facts','A plot with a problem','Rhyming stanzas'],a:1,t:'Text Types',e:'Non-fiction books contain real facts. Features include an index, table of contents, headings and photographs.'},
{id:'e66',q:'A story with characters, a setting, a problem and a solution is called a:',o:['Report','Procedure','Narrative','Letter'],a:2,t:'Text Types',e:'A narrative (story) has characters, a setting, a problem (complication) and a resolution (solution).'},
{id:'e67',q:'The purpose of a persuasive text is to:',o:['Entertain with a funny story','Give step-by-step instructions','Convince the reader to agree with an opinion','Describe how something works'],a:2,t:'Text Types',e:'A persuasive text aims to change the reader\'s mind or convince them of a point of view.'},

// ── Mixed Language Review ──
{id:'e68',q:'Which sentence uses "their" correctly?',o:["Their going to the game.","The students forgot there bags.","The children packed their lunches.","Its their fault."],a:2,t:'Grammar',e:'"Their" shows possession — it belongs to them. "The children packed their (belonging to them) lunches."'},
{id:'e69',q:'Choose the CORRECT sentence:',o:['Me and Mevil went to school.','Mevil and me went to school.','Mevil and I went to school.','I and Mevil went to school.'],a:2,t:'Grammar',e:'Use "I" as a subject, not "me." Remove "Mevil and" — "I went to school" is correct.'},
{id:'e70',q:'What type of word is "under" in "The wombat hid under a log"?',o:['Noun','Verb','Preposition','Adjective'],a:2,t:'Grammar',e:'"Under" is a preposition — it shows the relationship/position between the wombat and the log.'},
{id:'e71',q:'Which sentence has an ERROR?',o:['She walked quickly to school.','He ride his bike every morning.','They love playing cricket.','We went to the Dandenong Ranges.'],a:1,t:'Grammar',e:'"He ride" is incorrect. It should be "He rides" (add -s for he/she/it in present tense).'},
{id:'e72',q:'Which is a COMPOUND word?',o:['running','beautiful','playground','carefully'],a:2,t:'Vocabulary',e:'"Playground" = play + ground. It is made from two smaller words joined together.'},
{id:'e73',q:'The root word in "unhelpful" is:',o:['un','help','helpful','unhelp'],a:1,t:'Vocabulary',e:'The root word is "help." The prefix "un-" and suffix "-ful" are added to it.'},
{id:'e74',q:'Which sentence is in PRESENT CONTINUOUS tense (happening right now)?',o:['She ran to school.','He will eat his lunch.','They are playing cricket.','We played in the rain.'],a:2,t:'Verbs',e:'Present continuous uses is/are + -ing: "are playing" shows something happening right now.'},
{id:'e75',q:'What punctuation ends this sentence correctly? "What a beautiful sunset over Port Phillip Bay"',o:['Full stop','Question mark','Exclamation mark','Comma'],a:2,t:'Punctuation',e:'This is an exclamation — it expresses strong feeling or admiration. Use an exclamation mark (!).'},
{id:'e76',q:'Which word is a SYNONYM for "said" that shows the person was speaking loudly and angrily?',o:['whispered','muttered','shouted','replied'],a:2,t:'Vocabulary',e:'"Shouted" means to speak loudly, often with anger or urgency.'},
{id:'e77',q:'Which sentence correctly uses a COMMA after an introductory phrase?',o:['After the footy match we had a barbeque.','After the footy match, we had a barbeque.','After, the footy match we had a barbeque.','After the footy, match we had a barbeque.'],a:1,t:'Punctuation',e:'A comma goes after the introductory phrase "After the footy match" before the main clause.'},
];
