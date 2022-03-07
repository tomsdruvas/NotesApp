package WoodMac.NotesApp.components;

import WoodMac.NotesApp.models.NotesItem;
import WoodMac.NotesApp.repositories.NotesItemRepository;
import com.apple.eawt.Application;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    NotesItemRepository notesItemRepository;

    public void run(ApplicationArguments args) throws Exception {


        NotesItem notesItem = new NotesItem("Notes examples title", "123", "456", "THis is going to be the text" );
        notesItemRepository.save(notesItem);

        NotesItem notesItem2 = new NotesItem("Notes wefwefexamples title", "121243", "452346", "THis is gfgsdfgdfgoing to be the text" );
        notesItemRepository.save(notesItem2);




    }
}
