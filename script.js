var lastIndex = 0;
			
	function randomImage() {
		var theImage = document.getElementById('myimage');
			var imgDir = 'images/';
			var imgArray = new Array('1 (1).jpg','1 (2).jpg','1 (3).jpg','1 (4).jpg','1 (5).jpg','1 (6).jpg','1 (7).jpg','1 (8).jpg','1 (9).jpg','1 (10).jpg','1 (11).jpg','1 (12).jpg','1 (13).jpg','1 (14).jpg','1 (15).jpg','1 (16).jpg','1 (17).jpg','1 (18).jpg','1 (19).jpg','1 (20).jpg','1 (21).jpg','1 (22).jpg','1 (23).jpg','1 (24).jpg','1 (25).jpg','1 (26).jpg','1 (27).jpg','1 (28).jpg','1 (29).jpg','1 (30).jpg','1 (31).jpg','1 (32).jpg','1 (33).jpg','1 (34).jpg','1 (35).jpg','1 (36).jpg','1 (37).jpg','1 (38).jpg','1 (39).jpg','1 (40).jpg','1 (41).jpg','1 (42).jpg','1 (43).jpg','1 (44).jpg','1 (45).jpg','1 (46).jpg','1 (47).jpg','1 (48).jpg','1 (49).jpg','1 (50).jpg','1 (51).jpg','1 (52).jpg','1 (53).jpg','1 (54).jpg','1 (55).jpg','1 (56).jpg','1 (57).jpg','1 (58).jpg','1 (59).jpg','1 (60).jpg','1 (61).jpg','1 (62).jpg','1 (63).jpg','1 (64).jpg','1 (65).jpg','1 (66).jpg','1 (67).jpg','1 (68).jpg','1 (69).jpg','1 (70).jpg','1 (71).jpg','1 (72).jpg','1 (73).jpg','1 (74).jpg','1 (75).jpg','1 (76).jpg','1 (77).jpg','1 (78).jpg','1 (79).jpg','1 (80).jpg','1 (81).jpg','1 (82).jpg','1 (83).jpg','1 (84).jpg','1 (85).jpg','1 (86).jpg','1 (87).jpg','1 (88).jpg','1 (89).jpg','1 (90).jpg','1 (91).jpg','1 (92).jpg','1 (93).jpg','1 (94).jpg','1 (95).jpg','1 (96).jpg','1 (97).jpg','1 (98).jpg','1 (99).jpg','1 (100).jpg','2 (1).jpg','2 (2).jpg','2 (3).jpg','2 (4).jpg','2 (5).jpg','2 (6).jpg','2 (7).jpg','2 (8).jpg','2 (9).jpg','2 (10).jpg','2 (11).jpg','2 (12).jpg','2 (13).jpg','2 (14).jpg','2 (15).jpg','2 (16).jpg','2 (17).jpg','2 (18).jpg','2 (19).jpg','2 (20).jpg','2 (21).jpg','2 (22).jpg','2 (23).jpg','2 (24).jpg','2 (25).jpg','2 (26).jpg','2 (27).jpg','2 (28).jpg','2 (29).jpg','2 (30).jpg','2 (31).jpg','2 (32).jpg','2 (33).jpg','2 (34).jpg','2 (35).jpg','2 (36).jpg','2 (37).jpg','2 (38).jpg','2 (39).jpg','2 (40).jpg','2 (41).jpg','2 (42).jpg','2 (43).jpg','2 (44).jpg','2 (45).jpg','2 (46).jpg','2 (47).jpg','2 (48).jpg','2 (49).jpg','2 (50).jpg','2 (51).jpg','2 (52).jpg','2 (53).jpg','2 (54).jpg','2 (55).jpg','2 (56).jpg','2 (57).jpg','2 (58).jpg','2 (59).jpg','2 (60).jpg','2 (61).jpg','2 (62).jpg','2 (63).jpg','2 (64).jpg','2 (65).jpg','2 (66).jpg','2 (67).jpg','2 (68).jpg','2 (69).jpg','2 (70).jpg','2 (71).jpg','2 (72).jpg','2 (73).jpg','2 (74).jpg','2 (75).jpg','2 (76).jpg','2 (77).jpg','2 (78).jpg','2 (79).jpg','2 (80).jpg','2 (81).jpg','2 (82).jpg','2 (83).jpg','2 (84).jpg','2 (85).jpg','2 (86).jpg','2 (87).jpg','2 (88).jpg','2 (89).jpg','2 (90).jpg','2 (91).jpg','2 (92).jpg','2 (93).jpg','2 (94).jpg','2 (95).jpg','2 (96).jpg','2 (97).jpg','2 (98).jpg','2 (99).jpg','2 (100).jpg','3 (1).jpg','3 (2).jpg','3 (3).jpg','3 (4).jpg','3 (5).jpg','3 (6).jpg','3 (7).jpg','3 (8).jpg','3 (9).jpg','3 (10).jpg','3 (11).jpg','3 (12).jpg','3 (13).jpg','3 (14).jpg','3 (15).jpg','3 (16).jpg','3 (17).jpg','3 (18).jpg','3 (19).jpg','3 (20).jpg','3 (21).jpg','3 (22).jpg','3 (23).jpg','3 (24).jpg','3 (25).jpg','3 (26).jpg','3 (27).jpg','3 (28).jpg','3 (29).jpg','3 (30).jpg','3 (31).jpg','3 (32).jpg','3 (33).jpg','3 (34).jpg','3 (35).jpg','3 (36).jpg','3 (37).jpg','3 (38).jpg','3 (39).jpg','3 (40).jpg','3 (41).jpg','3 (42).jpg','3 (43).jpg','3 (44).jpg','3 (45).jpg');
			var imgIndex = 0;
				
			if(imgArray.length > 1) {
				while(imgIndex == lastIndex) {
					imgIndex = Math.floor(Math.random() * imgArray.length);
				}
				lastIndex = imgIndex;
				
				var imgPath = imgDir + imgArray[imgIndex];
					
				theImage.src = imgPath;
				theImage.alt = imgArray[imgIndex];
			}
			else {
				return false;
			}
	}
