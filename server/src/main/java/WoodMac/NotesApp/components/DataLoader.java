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


        NotesItem notesItem = new NotesItem("Soup recipe", "Mar 20th 2022, 9:24", "Mar 20th 2022, 9:30", "**Lorem ipsum dolor** sit amet, amet fabellas usu at. *Veritus postulant* pro eu, ~~mutat intellegat~~ ex eos, ex has quot animal `consectetuer`. Ad euismod tibique interpretaris nam, ut quo \n\n> doming\n\n copiosae" );
        notesItemRepository.save(notesItem);

        NotesItem notesItem2 = new NotesItem("Sandwich recipe", "Mar 20th 2022, 9:35", "Mar 20th 2022, 9:40", "**Lorem ipsum dolor** Usu at. *Veritus postulant* pro eu, ~~mutat intellegat~~ ex eos, ex has quot animal `consectetuer`. Ad euismod tibique interpretaris nam, ut quo \n\n> doming\n\n copiosae " );
        notesItemRepository.save(notesItem2);

        NotesItem notesItem3 = new NotesItem("To Do List", "Mar 20th 2022, 9:35", "Mar 20th 2022, 9:40", "- Lorem ipsum\n\n - **dolor sit amet**\n\n - ~~amet fabellas usu at.~~\n\n- *Veritus postulant pro eu, mutat*  " );
        notesItemRepository.save(notesItem3);




    }
}
