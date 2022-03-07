package WoodMac.NotesApp;

import WoodMac.NotesApp.models.NotesItem;
import WoodMac.NotesApp.repositories.NotesItemRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class NotesAppApplicationTests {

	@Autowired
	NotesItemRepository notesItemRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canCreateNotesItem(){
		NotesItem notesItem = new NotesItem("Notes examples title", "123", "456", "THis is going to be the text" );
		notesItemRepository.save(notesItem);
	}

}
