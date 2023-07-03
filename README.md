![EILD-Logo](src/img/eild_header_logo.png)

# B-Baum

Dieser B-Baum-Zeichner ist eine Lernanwendung für B-Bäume. Der Typ (Zahlen oder Strings) und der Grad (1 - 5) des Baums können festgelegt und Werte eingefügt oder gelöscht werden. Dargestellt wird die Version des Baums jeweils vor und nach dem Einfügen oder Löschen eines Elements.

Schlagworte: Datenbanksysteme, Datenbank, Index, B-Baum


## Weitere Informationen
BTree wurde im Projekt EILD.nrw weiterentwickelt. In EILD.nrw wird ein Ansatz mit weitgehender Adaptierbarkeit und Wiederverwendbarkeit der Lehrinhalte umgesetzt.  Die entwickelten OER werden über ORCA.nrw zur Verfügung gestellt.
- [EILD.nrw]
- [ORCA.nrw]
- [ORCA.nrw Github]

## Verwendung

Es gibt verschiedene Möglichkeiten den Trainer zu benutzen. Am einfachsten ist die Verwendung der auf GitHub bereitgestellten Version [BTree GH Pages]. Diese wird bei Änderungen aktualisiert und muss nicht selbst betrieben werden.

Alternativ lässt sich diese Version aus dem `gh-pages`-Branch als .zip-Datei herunterladen und anschließend auf Ilias, Moodle oder ähnliche Plattformen hochladen. Dort muss diese lediglich entpackt werden. Ilias erkennt die `index.html` automatisch als Startpunkt der Anwendung, auf anderen Plattformen muss dies eventuell noch manuell passieren.

Als letzte Alternative kann die Anwendung auch aus dem Sourcecode generiert werden. Das entsprechende Build-Skript aus der Package.json lässt sich mit `npm run build` ausführen. Der generierte Ordner ist dann identisch zu dem, der auch im `gh-pages`-Branch liegt.


## Lizenzierung

[![License: MIT][MIT-shield]][MIT]

[![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]


Die Anwendung BTree wurde ursprünglich von der [Technischen Hochschule Köln][TH Köln] im Rahmen der Online-Lernplattform [EDB] entwickelt und wurde als Teil des Projektes [EILD.nrw] von Alexander Kosmehl weiterentwickelt und als Open-Source Anwendung veröffentlicht.

Dieses Repository enthält Software unter [MIT-Lizenz][MIT] und Content unter [Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa]. Ausgenommen von der CC BY-SA 4.0 Lizenz sind die verwendeten Logos sowie alle anders lizenzierten Inhalte.

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

![image](https://user-images.githubusercontent.com/73349129/233968870-b61f0850-e7c2-489f-a597-53e030794b22.png)


[MIT]: https://github.com/orca-nrw/b-tree/blob/master/LICENSE
[MIT-shield]: https://img.shields.io/badge/License-MIT-yellow.svg
[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg
[HSD]: https://www.hs-duesseldorf.de/
[TH Köln]: https://www.th-koeln.de/
[BTree]: https://github.com/orca-nrw/b-tree
[BTree GH Pages]: https://orca-nrw.github.io/b-tree/
[EILD.nrw]: https://www.eild.nrw/
[EILD.nrw GitHub]: https://github.com/EILD-nrw
[ORCA.nrw]: https://www.orca.nrw/
[ORCA.nrw Github]: https://github.com/orca-nrw
