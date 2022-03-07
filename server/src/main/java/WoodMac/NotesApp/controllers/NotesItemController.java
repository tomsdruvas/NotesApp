package WoodMac.NotesApp.controllers;

import WoodMac.NotesApp.models.NotesItem;
import WoodMac.NotesApp.repositories.NotesItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class NotesItemController {

    @Autowired
    NotesItemRepository notesItemRepository;

    @GetMapping(value = "/notes")
    public ResponseEntity<List<NotesItem>>getAllNotesItems(){
            return new ResponseEntity<>(notesItemRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/notes")
    public ResponseEntity<NotesItem> postNotesItem(@RequestBody NotesItem notesItem){
        notesItemRepository.save(notesItem);
        return new ResponseEntity<>(notesItem, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/notes/{id}")
    public ResponseEntity<NotesItem> updateNotesItem(@RequestBody NotesItem notesItem){
        notesItemRepository.save(notesItem);
        return new ResponseEntity<>(notesItem, HttpStatus.OK);
    }

    @DeleteMapping(value = "/notes/{id}")
    public ResponseEntity<NotesItem> deleteNotesItem(@PathVariable Long id){
        NotesItem found = notesItemRepository.getOne(id);
        notesItemRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    };
}


