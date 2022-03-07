package WoodMac.NotesApp.repositories;

import WoodMac.NotesApp.models.NotesItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotesItemRepository extends JpaRepository<NotesItem, Long> {
}
